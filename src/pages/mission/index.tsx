import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  HiX,
  HiOutlineUserGroup,
  HiOutlineMap,
  HiOutlineCurrencyDollar,
  HiOutlinePencilAlt,
  HiOutlineCog,
  HiOutlineCode,
} from "react-icons/hi";
import Navbar from "../../components/misc/Navbar";

const missions = [
  {
    id: 1,
    name: "Community",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
  {
    id: 2,
    name: "Tokenomics",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
  {
    id: 3,
    name: "Services",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
  {
    id: 4,
    name: "Tools",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
  {
    id: 5,
    name: "Artwork",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
  {
    id: 6,
    name: "Future",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum vehicula auctor. Donec ac risus mattis, hendrerit
  erat sed, aliquam erat. Duis molestie ex sapien. Proin
  interdum orci in augue accumsan, eu sollicitudin metus dictum.
  Donec a mollis elit. Morbi eget massa lorem. Nullam iaculis
  neque tristique, ultricies nisi ut, semper justo.`,
  },
];

type Props = {
  user: DiscordUser;
};

const MissionPage: NextPage<Props> = ({ user }) => {
  const [modal, setModal] = useState<
    Partial<{ show: boolean; requestedModalId: number }>
  >({ show: false, requestedModalId: 0 });

  const handleOpenModal = (id: number) => {
    setModal({ show: true, requestedModalId: id });
  };

  const handleCloseModal = () => {
    setModal({ show: false });
  };

  function MissionModal(props: any) {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="relative flex flex-col w-full h-full bg-soft-blue-200 px-5 py-4 transform origin-top-left duration-500 scale-100 opacity-100  rounded-md">
          <p
            className="absolute z-40 right-5 text-white mr-3 text-3xl cursor-pointer"
            onClick={() => props.closeModal()}
          >
            <HiX size={32} aria-hidden="true" />
          </p>
          {props.children}
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="@pxldoggo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="icon" type="image/svg+xml" href="favicon.ico" />

        <title>Mission - Doggos</title>
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
      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-24">
        <h1 className="font-jakarta text-5xl dark:text-white text-gray-800 mb-2">
          Mission
        </h1>
        <p className="max-w-lg  mb-8">
          Here you can find a short and easy-to-read version of the Whitepaper
          with the most important topics.
        </p>
        <div className="relative flex flex-row flex-wrap lg:flex-nowrap min-w-[320px] lg:h-96 font-rixel rounded-md">
          <div className="flex flex-col w-full md:w-[73%] lg:w-[50%] h-full">
            <div className="h-[60%]">
              <div
                className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-col justify-end rounded-md"
                onClick={() => handleOpenModal(1)}
              >
                <HiOutlineUserGroup
                  className="absolute text-white bottom-4 right-4"
                  size={52}
                />
                <p className="text-white">01</p>
                <p className="text-white font-bold">Community</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-[50%]">
              <div className="w-[50%] pt-1">
                <div
                  className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-col justify-end rounded-md"
                  onClick={() => handleOpenModal(2)}
                >
                  <HiOutlineCurrencyDollar
                    className="absolute text-white bottom-4 right-4"
                    size={52}
                  />
                  <p className="text-white">02</p>
                  <p className="text-white font-bold">Tokenomics</p>
                </div>
              </div>
              <div className="w-[50%] pt-1 pl-1">
                <div
                  className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-col justify-end rounded-md"
                  onClick={() => handleOpenModal(3)}
                >
                  <HiOutlineCode
                    className="absolute text-white bottom-4 right-4"
                    size={52}
                  />
                  <p className="text-white">03</p>
                  <p className="text-white font-bold">Services</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pt-1 pl-0 md:w-[27%] md:pt-0 md:pl-1 lg:w-[25%]">
            <div
              className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-row rounded-md"
              onClick={() => handleOpenModal(4)}
            >
              <p className="text-white font-bold rotate-90 origin-top-left w-0 ml-[20px] md:ml-[30px]">
                Tools
              </p>
              <p className="text-white  rotate-90 origin-top-left w-0 ml-[20px] md:ml-[30px]">
                04
              </p>
              <HiOutlineCog
                className="text-white absolute right-2 max-w-[80%] max-h-[50%] md:right-4 bottom-4"
                size={52}
              />
            </div>
          </div>
          <div className="flex flex-row w-full lg:flex-col lg:w-[30%] lg:pl-1">
            <div className="w-[60%] pt-1 lg:h-[30%] lg:w-full lg:pt-0">
              <div
                className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-col justify-end rounded-md"
                onClick={() => handleOpenModal(5)}
              >
                <HiOutlinePencilAlt
                  className="absolute text-white bottom-4 right-4"
                  size={52}
                />
                <p className="text-white text-left">05</p>
                <p className="text-white font-bold text-left">Artwork</p>
              </div>
            </div>
            <div className="w-[40%] pt-1 pl-1 lg:h-[100%] lg:w-full lg:pl-0">
              <div
                className="relative flex w-full h-full bg-soft-blue-200 hover:contrast-125 cursor-pointer p-4 text-xl md:text-3xl flex-col justify-end rounded-md"
                onClick={() => handleOpenModal(6)}
              >
                <HiOutlineMap
                  className="text-white absolute top-4 right-2 bottom-[35%] md:right-4 md:bottom-[40px]"
                  size={52}
                />
                <p className="text-white">06</p>
                <p className="text-white font-bold">Future</p>
              </div>
            </div>
          </div>

          {missions.map(
            (item) =>
              modal.show &&
              modal.requestedModalId === item.id && (
                <MissionModal key={item.id} closeModal={handleCloseModal}>
                  <p className="absolute bottom-2 right-2 text-white text-[25rem] leading-[25rem] opacity-25">
                    0{item.id}
                  </p>
                  <div className="relative flex flex-row w-full">
                    <p className="text-white font-bold text-3xl">{item.name}</p>
                  </div>
                  <div className="text-white text-lg leading-5 lg:text-l pr-24 lg:leading-6 z-10 overflow-auto">
                    <p className="pt-3">{item.text}</p>
                  </div>
                </MissionModal>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default MissionPage;
