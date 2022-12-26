import { AxiosError } from "axios";
import { channel } from "diagnostics_channel";
import { GetServerSidePropsContext, NextPage } from "next";
import Router from "next/router";
import { ReactElement, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import {
  deleteVerificationSystem,
  fetchGuild,
  postVerificationSystem,
} from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import {
  DiscordChannel,
  DiscordGuild,
  Guild,
  NextPageWithLayout,
} from "../../../utils/types";

type Props = {
  discordGuild: DiscordGuild;
  channels: DiscordChannel[];
  guild: Guild;
};

const DashboardPage: NextPageWithLayout<Props> = ({
  discordGuild,
  channels,
  guild,
}) => {
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
      postVerificationSystem(discordGuild.id, {
        channelId: channel,
        contractAddress: address,
        roleId: role,
      })
        .then((data) => {
          toast(data);
          Router.reload();
        })
        .catch((err: AxiosError) => {
          toast(err.response?.data as string);
        });
    }
  };
  const onDelete = () => {
    deleteVerificationSystem(discordGuild.id)
      .then((data) => {
        toast(data);
        Router.reload();
      })
      .catch((err: AxiosError) => {
        toast(err.response?.data as string);
      });
  };

  useEffect(() => {
    console.log(discordGuild);
    setGuild(discordGuild);
  }, [discordGuild, setGuild]);
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      Dashboard Page
      <p className="pb-8">{discordGuild.name}</p>
      {guild.verification ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={guild.verification.isEnabled}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            {guild.verification.isEnabled
              ? "Disable verification."
              : "Enable verification."}
          </div>
          <button
            onClick={onDelete}
            className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out rounded text-white border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800"
          >
            Delete
          </button>
          <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800">
            Save
          </button>
        </div>
      ) : (
        <>
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
                {discordGuild.roles.map((role) =>
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
        </>
      )}
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
