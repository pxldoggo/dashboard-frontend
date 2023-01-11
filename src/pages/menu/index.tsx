import { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/api";
import { DiscordGuild } from "../../utils/types";

type Props = {
  allGuilds: { guilds: DiscordGuild[]; guildsAdmin: DiscordGuild[] };
};

const MenuPage: NextPage<Props> = ({ allGuilds }) => {
  const router = useRouter();
  const { guilds, guildsAdmin } = allGuilds;
  const getBotAuthLink = (guildId: string) => {
    return `https://discord.com/oauth2/authorize?client_id=1050777933754663012&scope=bot&permissions=2147483656&guild_id=${guildId}`;
  };
  const filteredGuilds: DiscordGuild[] = guildsAdmin.filter((guild) => {
    if (guilds.length > 0) {
      return guilds.filter((withBotGuild) => withBotGuild.id != guild.id);
    } else {
      return guild;
    }
  });
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      <h1 className={"font-normal text-4xl pb-16"}>
        Please Select a Discord Server
      </h1>
      <h1 className={"font-normal pb-2"}>
        Servers that you are admin and the bot is in it.
      </h1>
      <div className="grid w-full grid-cols-3 gap-3 border border-red-500 rounded-xl p-12">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            onClick={() => router.push(`/dashboard/${guild.id}`)}
          >
            <GuildMenuItem color="1d1d1f" guild={guild} />
          </div>
        ))}
      </div>
      <h1 className={"font-normal pb-2 pt-12"}>Servers that you are admin.</h1>
      <div className="grid w-full grid-cols-3 gap-3 border border-red-500 rounded-xl p-12">
        {filteredGuilds.map((guild) => (
          <div key={guild.id}>
            <Link
              href={getBotAuthLink(guild.id)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GuildMenuItem color="fbfbfd" guild={guild} />
            </Link>
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
