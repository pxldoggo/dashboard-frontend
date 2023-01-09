import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import {
  DiscordGuild,
  DiscordUser,
  Guild,
  PostVerificationGuildEmbed,
  SpreadsheetWalletsType,
} from "./types";
import useSWR from "swr";

const environment = process.env.NODE_ENV;
const isDevelopment = environment === "development";
const API_URL = isDevelopment
  ? `http://localhost:3001`
  : "https://api.pixeldoggo.com";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useWhitelistedWallets = () => {
  const { data, error } = useSWR<SpreadsheetWalletsType>(
    `https://sheets.googleapis.com/v4/spreadsheets/1AJA-bwVyoLjrGIhITpSm_tVXCcnutPNn0D96fy8Wa1k/values/Address!A2:A300?key=${process
      .env.SPREADSHEET_KEY!}`,
    fetcher
  );
  return {
    wallets: data,
    isWalletsLoading: !error && !data,
    isWalletsError: error,
  };
};

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: { destination: "/" } };

  try {
    const { data: guilds } = await axios.get<DiscordGuild[]>(
      `${API_URL}/guilds`,
      {
        headers,
      }
    );
    const { data: adminGuilds } = await axios.get<DiscordGuild[]>(
      `${API_URL}/guilds/admin`,
      {
        headers,
      }
    );
    console.log(guilds);
    return { props: { guilds, adminGuilds } };
  } catch (error) {
    console.log(error);
    return { redirect: { destination: "/" } };
  }
};

export const fetchUser = async (context: GetServerSidePropsContext) => {
  if (context.resolvedUrl === "/verify") {
    const headers = validateCookies(context);
    if (!headers) return { props: { user: {} } };

    try {
      const { data: user } = await axios.get<DiscordUser>(`${API_URL}/user`, {
        headers,
      });
      return { props: { user } };
    } catch (error) {
      console.log(error);
      return { props: { user: {} } };
    }
  } else {
    const headers = validateCookies(context);
    if (!headers) return { redirect: { destination: "/" } };
    try {
      const { data: user } = await axios.get<DiscordUser>(`${API_URL}/user`, {
        headers,
      });
      return { props: { user } };
    } catch (error) {
      console.log(error);
      return { redirect: { destination: "/" } };
    }
  }
};

export const fetchGuild = async (ctx: GetServerSidePropsContext) => {
  const headers = validateCookies(ctx);
  console.log(headers);
  if (!headers) return { redirect: { destination: "/" } };
  try {
    const { data: discordGuild } = await axios.get<DiscordGuild>(
      `${API_URL}/guilds/${ctx.query.id}`,
      {
        headers,
      }
    );
    const { data: channels } = await axios.get<DiscordGuild[]>(
      `${API_URL}/guilds/${ctx.query.id}/channels`,
      {
        headers,
      }
    );
    const { data: guild } = await axios.get<Guild[]>(
      `${API_URL}/guilds/${ctx.query.id}/verification`,
      {
        headers,
      }
    );
    console.log(discordGuild);
    return { props: { discordGuild, channels, guild } };
  } catch (err) {
    console.log(err);
    return { redirect: { destination: "/" } };
  }
};

export const fetchValidGuild = (id: string, headers: HeadersInit) => {
  return fetch(`${API_URL}/guilds/${id}/permissions`, {
    headers,
  });
};
export const postVerificationSystem = async (
  id: string,
  body: PostVerificationGuildEmbed
) => {
  const { data } = await axios.post(
    `${API_URL}/guilds/${id}/verification`,
    body,
    { withCredentials: true }
  );
  return data;
};
export const getVerificationSystem = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/guilds/${id}/verification`, {
    withCredentials: true,
  });
  return data;
};
export const deleteVerificationSystem = async (id: string) => {
  const { data } = await axios.delete(`${API_URL}/guilds/${id}/verification`, {
    withCredentials: true,
  });
  return data;
};
