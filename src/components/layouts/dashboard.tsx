import { ReactElement, useContext } from "react";
import { GuildContext } from "../../utils/contexts/GuildContext";
import { Sidebar } from "../misc/SideBar";
import { Appbar } from "../misc/AppBar";

export function DashboardLayout({ children }: { children: ReactElement }) {
  const { guild } = useContext(GuildContext);
  return (
    <>
      <Sidebar guild={guild} />
      <div className={"ml-32 h-[calc(100%-128px)]"}>
        <Appbar guild={guild} />
        <>{children}</>
      </div>
    </>
  );
}
