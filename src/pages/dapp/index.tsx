import { GetServerSidePropsContext, NextPage } from "next";
import { UserType } from "../../utils/types";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../../components/misc/Modal";
import { Canvas } from "../../components/misc/Canvas";
import { Header } from "../../components/dapp/Header";
import Head from "next/head";
//@ts-ignore
import AVVY from "@avvy/client";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import {
  disconnectDiscord,
  disconnectTwitter,
  fetchUser,
  useWhitelistedWallets,
} from "../../utils/api";
import { ethers } from "ethers";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type Props = {
  user: UserType;
};

const DappPage: NextPage<Props> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wallets, isWalletsLoading } = useWhitelistedWallets();
  const [domainAddress, setDomainAddress] = useState(null);
  const router = useRouter();
  const { error } = router.query;
  if (error) {
    if (error == "TwitterError") {
      toast(
        "Please disconnect your Twitter account from the other wallet so that you can connect it to this account.",
        { toastId: "twitterError", type: "error" }
      );
    }
    if (error == "DiscordError") {
      toast(
        "Please disconnect your Discord account from the other wallet so that you can connect it to this account.",
        { toastId: "discordError", type: "error" }
      );
    }
  }

  const handleLoginDiscord = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  const handleLoginTwitter = () => {
    window.location.href = `${process.env.API_URL}/auth/twitter`;
  };
  const handleDisconnectDiscord = async () => {
    await disconnectDiscord();
    window.location.reload();
    toast("Discord disconnect with success!", {
      toastId: "disconnectDiscord",
      type: "success",
    });
  };
  const handleDisconnectTwitter = async () => {
    await disconnectTwitter();
    window.location.reload();
    toast("Twitter disconnect with success!", {
      toastId: "disconnectTwitter",
      type: "success",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const IsWl = () => {
    if (!isWalletsLoading) {
      const wl = wallets?.values.some((wallet) => wallet == user.wallet);
      return wl;
    }
  };
  useEffect(() => {
    const getDomainAddress = async () => {
      const PROVIDER_URL = "https://api.avax.network/ext/bc/C/rpc";
      const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
      const avvy = new AVVY(provider);
      const hash = await avvy.reverse(AVVY.RECORDS.EVM, user.wallet);
      if (hash) {
        const name = await hash.lookup();
        setDomainAddress(name?.name);
      }
    };

    if (!domainAddress) {
      getDomainAddress();
    }
  }, [domainAddress, user.wallet]);

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
        {!isWalletsLoading && IsWl() && user.twitter ? (
          <div>
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
                  <p className="mr-2 text-base font-bold text-soft-blue-100">
                    Announcement
                  </p>
                </div>
                <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                <p className="text-sm sm:text-base text-gray-800 dark:text-white pt-2 sm:pt-0 pb-2 sm:pb-0">
                  You can claim a custom banner to rock Doggos everywhere
                </p>
              </div>
              <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                <button
                  className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                  onClick={openModal}
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="grid-custom">
          <div className="flex flex-col gap-2">
            <div className="rounded shadow bg-white dark:bg-gray-700 p-2 flex justify-center items-center">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button
                              onClick={openConnectModal}
                              className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-center"
                              type="button"
                            >
                              Connect Wallet
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200"
                              type="button"
                            >
                              Wrong network
                            </button>
                          );
                        }

                        return (
                          <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col items-center gap-4 py-6 justify-center">
                              {account.ensAvatar ? (
                                <Image
                                  src={account.ensAvatar}
                                  className="rounded-full w-16 h-16"
                                  alt="Avatar"
                                />
                              ) : (
                                <Jazzicon
                                  diameter={64}
                                  seed={jsNumberForAddress(user.wallet)}
                                />
                              )}

                              <div className="text-center">
                                <p className="text-sm font-medium dark:text-white text-gray-800">
                                  Connected as
                                </p>
                                <button
                                  onClick={openAccountModal}
                                  className="text-base font-bold dark:text-white text-gray-800 hover:text-soft-blue-400"
                                  type="button"
                                >
                                  {domainAddress != null
                                    ? domainAddress
                                    : `${user.wallet.slice(
                                        0,
                                        4
                                      )}...${user.wallet.slice(38, 42)}`}
                                </button>
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium dark:text-white text-gray-800 mb-1">
                                  Packlisted?
                                </p>
                                {!isWalletsLoading && IsWl() ? (
                                  <p className="text-base font-bold dark:text-white text-gray-800 hover:text-soft-blue-400">
                                    ✅ Yes
                                  </p>
                                ) : (
                                  <p className="text-base font-bold dark:text-white text-gray-800 hover:text-soft-blue-400">
                                    ❌ No
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>

            <div className="rounded shadow bg-white dark:bg-gray-700 p-4 pb-6">
              <div className="flex flex-col mb-4 justify-center items-center gap-1">
                <p className="font-bold dark:text-white text-gray-800">
                  Social Connection
                </p>
                <p className="text-sm text-center w-3/4 font-medium dark:text-white text-gray-800">
                  Connect your socials to unlock more features
                </p>
              </div>
              <div className="flex gap-4 flex-col px-8">
                <section>
                  {!user.discord ? (
                    <>
                      <div className="flex gap-2 flex-row justify-between items-center">
                        <h4 className="font-semibold dark:text-white text-gray-800">
                          ❌ Discord
                        </h4>
                        <button
                          onClick={handleLoginDiscord}
                          type="button"
                          className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                        >
                          Connect
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2 flex-row justify-between items-center">
                        <h4 className="font-semibold dark:text-white text-gray-800">
                          ✅ Discord
                        </h4>
                        <p className="text-base dark:text-white text-gray-800 hover:text-soft-blue-400">
                          {user.discord.user?.username}#
                          {user.discord.user?.discriminator}
                        </p>
                        <button
                          onClick={handleDisconnectDiscord}
                          type="button"
                          className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-red-600 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                        >
                          Disconnect
                        </button>
                      </div>
                    </>
                  )}
                </section>
                <section>
                  {!user.twitter ? (
                    <>
                      <div className="flex gap-2 flex-row justify-between items-center">
                        <h4 className="font-semibold dark:text-white text-gray-800">
                          ❌ Twitter
                        </h4>
                        <button
                          onClick={handleLoginTwitter}
                          type="button"
                          className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                        >
                          Connect
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2 flex-row justify-between items-center">
                        <h4 className="font-semibold dark:text-white text-gray-800">
                          ✅ Twitter
                        </h4>
                        <p className="text-base dark:text-white text-gray-800 hover:text-soft-blue-400">
                          @{user.twitter.user?.username}
                        </p>
                        <button
                          onClick={handleDisconnectTwitter}
                          type="button"
                          className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-red-600 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
                        >
                          Disconnect
                        </button>
                      </div>
                    </>
                  )}
                </section>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded shadow bg-white dark:bg-gray-700 p-4">
              [Redacted]
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div className="p-6">
            <h2 className="font-jakarta dark:text-white text-2xl text-gray-800 mb-4">
              Claim your banner
            </h2>
            {/* @ts-ignore */}
            <Canvas info={user} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DappPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}
