import { GetServerSidePropsContext, NextPage } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { DiscordGuild, NextPageWithLayout } from "../../../utils/types";

type Props = {
  guild: DiscordGuild;
};

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
  const { setGuild } = useContext(GuildContext);
  useEffect(() => {
    console.log(guild);
    setGuild(guild);
  }, []);
  return (
    <div className="p-12 bg-[#1d1d1f] h-screen">
      Dashboard Page
      <p>{guild.name}</p>
    </div>
  );
};

DashboardPage.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return fetchGuild(ctx);
}

export default DashboardPage;
