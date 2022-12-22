import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser, UserType } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { DISCORD_CDN_URL } from "../../utils/constants";
import { useEffect } from "react";
import Navbar from "../../components/misc/Navbar";
import { useAccount, useNetwork } from "wagmi";
import Router from "next/router";

type Props = {
  user: UserType;
};

const DappPage: NextPage<Props> = ({ user }) => {
  const { address, isConnected, connector } = useAccount();

  const handleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  if (!address && !isConnected) {
    return (
      <>
        <Navbar />
        <div className="w-full flex justify-center items-center py-24">
          <h1 className="font-jakarta dark:text-white text-3xl text-gray-800 pb-6">
            Connect Wallet to access the dApp
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative mx-auto mb-4 flex lg:pt-8 sm:pt-2 max-w-7xl items-center justify-between px-4 sm:px-6">
        a
      </div>
    </>
  );
};

export default DappPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}
