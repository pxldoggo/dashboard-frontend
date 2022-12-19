import { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchUser } from "../utils/api";
import { DiscordUser } from "../utils/types";
import Head from "next/head";

type Props = {
  user: DiscordUser;
};
const Home: NextPage<Props> = ({ user }) => {
  const router = useRouter();
  const handleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
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
      <div className="text-xl font-pixellari relative bg-gradient-header flex h-screen w-full overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col">
            <div className="mb-12 ">
              <img src="./logo.png" />
            </div>
            <div className="flex justify-center gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/pxldoggo"
                className="hover:scale-110 duration-100"
              >
                <img width={48} height={48} src="/twitter.png" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/rPA98J4xpQ"
                className="hover:scale-110 duration-100"
              >
                <img width={48} height={48} src="/discord.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
