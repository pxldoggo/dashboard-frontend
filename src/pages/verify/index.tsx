import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser, UserType } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { DISCORD_CDN_URL } from "../../utils/constants";

type Props = {
  user: UserType;
};

const VerifyPage: NextPage<Props> = ({ user }) => {
  const handleLoginDiscord = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  const handleLoginTwitter = () => {
    window.location.href = `${process.env.API_URL}/auth/twitter`;
  };
  return (
    <div className="flex justify-center flex-col-reverse gap-8 items-center w-screen h-screen">
      {!user.discord ? (
        <button
          onClick={handleLoginDiscord}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login with discord
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
          Logged as {user.discord.user?.username}
        </div>
      )}
      {!user.twitter ? (
        <button
          onClick={handleLoginTwitter}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          Logged as {user.twitter.user?.name}
        </div>
      )}
      <ConnectButton chainStatus={"none"} showBalance={false} />
    </div>
  );
};

export default VerifyPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}
