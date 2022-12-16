import { createContext } from "react";
import { DiscordGuild } from "../types";

type GuildContextType = {
  guild?: DiscordGuild;
  setGuild: (guild: DiscordGuild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  setGuild: () => {},
});
