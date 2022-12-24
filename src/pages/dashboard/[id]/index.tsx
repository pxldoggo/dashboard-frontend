import { channel } from "diagnostics_channel";
import { GetServerSidePropsContext, NextPage } from "next";
import { ReactElement, useContext, useEffect, useState } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild, postVerificationSystem } from "../../../utils/api";
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
  const [channel, setChannel] = useState();
  const [role, setRole] = useState();
  const [address, setAddress] = useState();

  const onChangeChannel = (e: any) => {
    setChannel(e.target.value);
  };
  const onChangeRole = (e: any) => {
    setRole(e.target.value);
  };
  const onChangeAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const onSend = () => {
    if (channel != undefined && role != undefined && address != undefined) {
      postVerificationSystem(guild.id, {
        channelId: channel,
        contractAddress: address,
        roleId: role,
      });
    }
  };

  useEffect(() => {
    console.log(guild);
    setGuild(guild);
  }, [guild, setGuild]);
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      Dashboard Page
      <p className="pb-8">{guild.name}</p>
      <div className="flex gap-2 flex-col pb-3">
        <div>
          <h1>Select a channel to send the verification message.</h1>
          <select onChange={onChangeChannel}>
            <option>Please select a channel.</option>
            {channels.map((channel) =>
              channel.type === 0 ? (
                <option value={channel.id} key={channel.id}>
                  {channel.name}
                </option>
              ) : (
                <></>
              )
            )}
          </select>
        </div>
        <div>
          <h1>Select the role you want to give to the verified.</h1>
          <select onChange={onChangeRole}>
            <option>Please select a Role.</option>
            {guild.roles.map((role) =>
              role.name != "@everyone" ? (
                <option value={role.id} key={role.id}>
                  {role.name}
                </option>
              ) : (
                <></>
              )
            )}
          </select>
        </div>
        <div className="w-full">
          <h1>Collection address</h1>
          <input
            onChange={onChangeAddress}
            type={"text"}
            placeholder={"Paste the collection address"}
          ></input>
        </div>
      </div>
      <button
        onClick={onSend}
        className="p-2 bg-[#fbfbfd] items-center flex content-center text-[#1d1d1f] rounded-lg "
      >
        Send
      </button>
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
