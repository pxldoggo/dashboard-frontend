import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { DiscordGuild } from "../../utils/types";

type Props = {
  guild?: DiscordGuild;
};

export const Sidebar: FC<Props> = ({ guild }) => {
  console.log(`https://cdn.discordapp.com/icons/${guild?.icon}/${guild?.icon}`);
  return (
    <div
      className={
        "fixed top-0 left-0 w-32 bg-[#121212] h-full p-6 flex flex-col items-center content-between"
      }
    >
      <Image
        src={`https://cdn.discordapp.com/icons/${guild?.id}/${guild?.icon}`}
        className={"rounded-full"}
        height={80}
        width={80}
        alt="guild_avatar"
      />
      <div className={"flex flex-col items-center mx-12"}></div>
      <div></div>
    </div>
  );
};
