import Image from "next/image";
import { FC } from "react";
import { DiscordGuild } from "../../utils/types";

type Props = {
  guild: DiscordGuild;
};
export const GuildMenuItem: FC<Props> = ({ guild }) => {
  return (
    <div
      className={
        "justify-between flex items-center cursor-pointer my-3 py-5 px-8 border border-yellow-200 rounded-lg"
      }
    >
      <Image
        className={"rounded-full"}
        src={
          guild.icon
            ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
            : "/guild.jpg"
        }
        height={55}
        width={55}
        alt={guild.name}
      />
      <p>{guild.name}</p>
    </div>
  );
};
