import { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchUser } from "../utils/api";
import { DiscordUser } from "../utils/types";
import Head from "next/head";
import Navbar from "../components/misc/Navbar";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Canvas } from "../components/misc/Canvas";
import { useContext } from "react";

const { API_URL } = process.env;
type Props = {
  user: DiscordUser;
};
const Home: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="@pxldoggo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="icon" type="image/svg+xml" href="favicon.ico" />

        <title>Doggos</title>
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
      <Navbar />

      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="box flex justify-center flex-col flex-nowrap">
            <h1 className="font-jakarta dark:text-white text-6xl text-gray-800 pb-6">
              Be part of the Doggos pack
            </h1>
            <p className="max-w-lg mb-6 text-justify">
              Being part of the pack is being among members who care and are
              always looking to improve the Avalanche 🔺 ecosystem.
            </p>
            <a
              target="_blank"
              href="https://docs.pixeldoggo.com"
              className="inline-flex items-center px-4 py-2 text-base font-medium dark:text-white text-white bg-soft-blue-100 border border-transparent rounded-md hover:bg-soft-blue-200 self-start"
              rel="noreferrer"
            >
              Read Whitepaper
            </a>
            <hr className="my-4 border-soft-blue-100/20" />
            <h5 className="pb-4 font-semibold">Follow us</h5>
            <div className="flex gap-6 flex-row">
              <a
                href="https://twitter.com/pxldoggo"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  size={32}
                  className="opacity-50 hover:opacity-100 transition-opacity hover:text-soft-blue-100 dark:hover:text-soft-blue-100 dark:text-white text-gray-800"
                />
              </a>
              <div className="cursor-not-allowed">
                <FaDiscord
                  size={32}
                  className="opacity-50 hover:opacity-100 transition-opacity hover:text-soft-blue-100 dark:hover:text-soft-blue-100 dark:text-white text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="grid grid-cols-3 gap-2 auto-rows-auto grid-flow-row">
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
              <div className="hover:scale-110 hover:shadow transition duration-150 ease-in-out">
                <Image
                  alt="Doggo"
                  src="/doggo.png"
                  className="rounded-md "
                  width={540}
                  height={540}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
