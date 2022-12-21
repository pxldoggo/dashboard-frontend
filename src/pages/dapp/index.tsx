import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser, UserType } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { DISCORD_CDN_URL } from "../../utils/constants";
import { useEffect } from "react";
import Navbar from "../../components/misc/Navbar";

type Props = {
  user: UserType;
};

const DappPage: NextPage<Props> = ({ user }) => {
  const handleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  return (
    <>
      <Navbar />
      oi
    </>
  );
};

export default DappPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}
