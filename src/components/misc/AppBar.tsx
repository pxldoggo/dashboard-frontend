import { useRouter } from "next/router";
import { FC } from "react";
import { DiscordGuild } from "../../utils/types";

type Props = {
  guild?: DiscordGuild;
};

export const Appbar: FC<Props> = ({ guild }) => {
  const router = useRouter();
  return (
    <div
      className={
        "bg-[#121212] flex items-center content-between h-32 py-10 text-xl"
      }
    >
      <div
        className={"flex items-center last:ml-6"}
        onClick={() => router.push("/menu")}
      >
        <p>Menu</p>
      </div>
      <div>
        <p>{guild?.name}</p>
      </div>
    </div>
  );
};
