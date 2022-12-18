import { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchUser } from "../utils/api";
import { DiscordUser } from "../utils/types";

type Props = {
  user: DiscordUser;
};
const Home: NextPage<Props> = ({ user }) => {
  const router = useRouter();
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/auth/discord";
  };
  return (
    <div className="flex justify-center flex-col-reverse gap-8 items-center w-screen h-screen">
      <button
        onClick={handleLogin}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Login with discord
      </button>
    </div>
  );
};

export default Home;
