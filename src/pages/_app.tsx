import "../utils/styles/globals.css";
import { AppPropsWithLayout, DiscordGuild } from "../utils/types";
import { useState } from "react";
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
import {
  AuthProvider,
  useAuth,
  useIsAuthenticated,
} from "../utils/contexts/AuthContext";

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
      statement: "Sign in with Ethereum to the app.",
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
    const verifyRes = await fetch(`${process.env.API_URL}/wallet/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, signature }),
    });
    return Boolean(verifyRes.ok);
  },

  signOut: async () => {
    await fetch(`${process.env.API_URL}/auth/logout`);
  },
});
const MyApp = ({ Component, pageProps }: AppPropsWithLayout<any>) => {
  const [guild, setGuild] = useState<DiscordGuild>();
  const getLayout = Component.getLayout ?? ((page) => page);
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <AuthProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={isAuthenticated ? "authenticated" : "unauthenticated"}
        >
          <RainbowKitProvider chains={chains}>
            <GuildContext.Provider value={{ guild, setGuild }}>
              {getLayout(<Component {...pageProps} />)}
            </GuildContext.Provider>
          </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </WagmiConfig>
    </AuthProvider>
  );
};
export default MyApp;
