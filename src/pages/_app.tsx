import "../utils/styles/globals.css";

import { ThemeProvider } from "next-themes";

import { AppPropsWithLayout, DiscordGuild } from "../utils/types";
import { useContext, useEffect, useState } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { avalanche, avalancheFuji } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";
import {
  useAuthenticationAdapter,
  useAuthenticationStatus,
} from "@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/AuthenticationContext";
import { validateCookies } from "../utils/helpers";
import axios from "axios";
import Router from "next/router";

const { chains, provider } = configureChains(
  [avalanche, avalancheFuji],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch(`${process.env.API_URL}/wallet/nonce`);
    return await response.text();
  },

  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
    });
  },

  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },

  verify: async ({ message, signature }) => {
    const verifyRes = await axios.post(
      `${process.env.API_URL}/wallet/verify`,
      { message, signature },
      { withCredentials: true }
    );
    Router.reload();
    localStorage.setItem("authenticate", "true");
    return Boolean(verifyRes.status === 200);
  },

  signOut: async () => {
    localStorage.setItem("authenticate", "false");
    await fetch(`${process.env.API_URL}/auth/logout`);
  },
});

const MyApp = ({ Component, pageProps }: AppPropsWithLayout<any>) => {
  const [guild, setGuild] = useState<DiscordGuild>();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const isAuth =
      localStorage.getItem("authenticate") == null
        ? false
        : localStorage.getItem("authenticate") === "true"
        ? true
        : false;
    setAuthenticated(isAuth);
  }, [setAuthenticated]);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={authenticated ? "authenticated" : "unauthenticated"}
        >
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            appInfo={{
              appName: "Doggos",
              learnMoreUrl: "https://docs.pixeldoggo.com",
            }}
          >
            <GuildContext.Provider value={{ guild, setGuild }}>
              {getLayout(<Component {...pageProps} />)}
            </GuildContext.Provider>
          </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};
export default MyApp;
