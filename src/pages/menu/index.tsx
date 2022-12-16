import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/api";
import { DiscordGuild } from "../../utils/types";

type Props = {
  guilds: DiscordGuild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {
  const router = useRouter();
  console.log(guilds);
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      <div className={"w-1/4"}>
        <h1 className={"font-normal"}>Please Select a Discord Server</h1>
        {guilds.map((guild) => (
          <div
            key={guild.id}
            onClick={() => router.push(`/dashboard/${guild.id}`)}
          >
            <GuildMenuItem guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}

export default MenuPage;
