import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser, UserType } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { DISCORD_CDN_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Navbar from "../../components/misc/Navbar";
import { useAccount, useNetwork } from "wagmi";
import Router from "next/router";
import Modal from "../../components/misc/Modal";
import { Canvas } from "../../components/misc/Canvas";
import { Header } from "../../components/dapp/Header";
import Head from "next/head";

type Props = {
  user: UserType;
};

const DappPage: NextPage<Props> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginDiscord = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  const handleLoginTwitter = () => {
    window.location.href = `${process.env.API_URL}/auth/twitter`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="@pxldoggo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="icon" type="image/svg+xml" href="favicon.ico" />

        <title>dApp - Doggos</title>
        <meta property="og:image" content="/banner.png" />
        <meta name="theme-color" content="#569FF6" />
        <meta name="title" content="Doggos" />
        <meta name="og:title" content="Doggos" />
        <meta
          name="description"
          content="Doggos is a web3 project that aims to provide the best tools for building social communities and projects, providing utility and ensuring security for other web3 projects."
        />
        <meta
          property="og:description"
          content="Doggos is a web3 project that aims to provide the best tools for building social communities and projects, providing utility and ensuring security for other web3 projects."
        />
        <meta
          name="keywords"
          content="Doggos, NFT, Doggo, Avalanche, Avalanche NFT, Animated NFT, Joepegs, Kalao, Avax, Generative NFT, Pixel Art, Doggos Labs"
        />
        <meta property="type" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="Doggos" />
        <meta property="url" content="https://pixeldoggo.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative mx-auto mb-4 lg:pt-8 sm:pt-2 max-w-7xl px-4 sm:px-6">
        {user.twitter ? (
          <div>
            {/* Code block starts */}
            <div
              id="alert"
              className="transition duration-150 ease-in-out py-4 px-6  dark:bg-gray-600 bg-white md:flex items-center justify-between shadow rounded mb-4"
            >
              <div className="sm:flex sm:items-start lg:items-center">
                <div className="flex items-end">
                  <div className="mr-2 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      fill="currentColor"
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                      />
                    </svg>
                  </div>
                  <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100">
                    Announcement
                  </p>
                </div>
                <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">
                  You can claim a custom banner to use on social media
                </p>
              </div>
              <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                <button
                  className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                  onClick={openModal}
                >
                  Claim Banner
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="flex">
          {!user.discord ? (
            <button
              onClick={handleLoginDiscord}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent mr-4 bg-soft-blue-100 px-4 py-3 font-bold text-sm text-white shadow-sm hover:bg-soft-blue-200 focus:outline-none focus:ring-2 focus:ring-soft-blue-100 focus:ring-offset-2"
            >
              Login with Discord
            </button>
          ) : (
            <div className="items-center flex flex-row gap-3">
              <Image
                className="rounded-full"
                alt="Discord user profile image"
                src={`${DISCORD_CDN_URL}/avatars/${user.discord.discordId}/${user.discord.user?.avatar}`}
                width={50}
                height={50}
              />
              Logged as {user.discord.user?.username}#
              {user.discord.user?.discriminator}
            </div>
          )}
          {!user.twitter ? (
            <button
              onClick={handleLoginTwitter}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-soft-blue-100 px-4 py-3 font-bold text-sm text-white shadow-sm hover:bg-soft-blue-200 focus:outline-none focus:ring-2 focus:ring-soft-blue-100 focus:ring-offset-2"
            >
              Login with Twitter
            </button>
          ) : (
            <div className="items-center flex flex-row gap-3">
              <Image
                className="rounded-full"
                alt="Twitter user profile image"
                src={`${user.twitter.user?.profile_image_url}`}
                width={50}
                height={50}
              />
              Logged as @{user.twitter.user?.username}
            </div>
          )}
        </div>
        <div>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <div className="p-6">
              <h2 className="font-jakarta dark:text-white text-2xl text-gray-800 mb-4">
                Claim your banner
              </h2>
              <Canvas username={user} />
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default DappPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}
