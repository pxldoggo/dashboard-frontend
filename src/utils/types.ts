import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type DiscordUser = {
  id: string;
  username: string;
  discriminator: string;
  avatar: boolean;
  email: string;
  flags: string;
  banner: string;
  accent_color: string;
  premium_type: string;
  public_flags: string;
  wallets: string[];
};

export type DiscordGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
};

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};
