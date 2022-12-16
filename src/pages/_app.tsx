import "../utils/styles/globals.css";
import { AppPropsWithLayout, DiscordGuild } from "../utils/types";
import { useState } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";

function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const [guild, setGuild] = useState<DiscordGuild>();
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <GuildContext.Provider value={{ guild, setGuild }}>
      {getLayout(<Component {...pageProps} />)}
    </GuildContext.Provider>
  );
}

export default MyApp;
