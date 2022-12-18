import { channel } from "diagnostics_channel";
import { GetServerSidePropsContext, NextPage } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import {
  DiscordChannel,
  DiscordGuild,
  NextPageWithLayout,
} from "../../../utils/types";

type Props = {
  guild: DiscordGuild;
  channels: DiscordChannel[];
};

const DashboardPage: NextPageWithLayout<Props> = ({ guild, channels }) => {
  const { setGuild } = useContext(GuildContext);
  useEffect(() => {
    console.log(guild);
    setGuild(guild);
  }, [guild, setGuild]);
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      Dashboard Page
      <p className="pb-8">{guild.name}</p>
      <div className="flex gap-2 flex-col">
        <div>
          <h1>Select a channel to send the verification message.</h1>
          <select>
            {channels.map((channel) =>
              channel.type === 0 ? (
                <option key={channel.id}>{channel.name}</option>
              ) : (
                <></>
              )
            )}
          </select>
        </div>
        <div>
          <h1>Select the role you want to give to the verified.</h1>
          <select>
            {guild.roles.map((role) =>
              role.name != "@everyone" ? (
                <option key={role.id}>{role.name}</option>
              ) : (
                <></>
              )
            )}
          </select>
        </div>
        <div className="w-full">
          <h1>Collection address</h1>
          <input
            type={"text"}
            placeholder={"Paste the collection address"}
          ></input>
        </div>
      </div>
    </div>
  );
};

DashboardPage.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return fetchGuild(ctx);
}

export default DashboardPage;
