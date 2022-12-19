import { GetServerSidePropsContext, NextPage } from "next";
import { DiscordUser } from "../../utils/types";
import { fetchUser } from "../../utils/api";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type Props = {
  user: DiscordUser;
};

const VerifyPage: NextPage<Props> = ({ user }) => {
  const handleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/discord`;
  };
  return (
    <div className="flex justify-center flex-col-reverse gap-8 items-center w-screen h-screen">
      {!user ? (
        <button
          onClick={handleLogin}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login with discord
        </button>
      ) : (
        <></>
      )}
      <ConnectButton chainStatus={"none"} showBalance={false} />
    </div>
  );
};

export default VerifyPage;
