import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface DiscordUserAccountType {
  discordId: string;
  accessToken: string;
  refreshToken: string;
}
export interface UserType {
  id: string;
  discord: DiscordUserAccountType;
  wallet: string;
}
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
export interface DiscordEmoji {
  name: string;
  roles: any[];
  id: string;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
}

export interface DiscordRole {
  id: string;
  name: string;
  permissions: string;
  position: number;
  color: number;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  description?: any;
  splash: string;
  discovery_splash?: any;
  approximate_member_count: number;
  approximate_presence_count: number;
  features: string[];
  emojis: DiscordEmoji[];
  banner: string;
  owner_id: string;
  application_id?: any;
  region?: any;
  afk_channel_id?: any;
  afk_timeout: number;
  system_channel_id?: any;
  widget_enabled: boolean;
  widget_channel_id: string;
  verification_level: number;
  roles: DiscordRole[];
  default_message_notifications: number;
  mfa_level: number;
  explicit_content_filter: number;
  max_presences?: any;
  max_members: number;
  max_video_channel_users: number;
  vanity_url_code: string;
  premium_tier: number;
  premium_subscription_count: number;
  system_channel_flags: number;
  preferred_locale: string;
  rules_channel_id?: any;
  public_updates_channel_id?: any;
}

export interface DiscordChannel {
  id: string;
  guild_id: string;
  name: string;
  type: number;
  position: number;
  permission_overwrites: any[];
  rate_limit_per_user: number;
  nsfw: boolean;
  topic: string;
  last_message_id: string;
  parent_id: string;
  default_auto_archive_duration: number;
}

export type DiscordPartialGuild = {
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
