import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import { DiscordGuild, DiscordUser } from "./types";

const environment = process.env.NODE_ENV;
const isDevelopment = environment === "development";
const API_URL = isDevelopment
  ? `http://localhost:3001`
  : "https://doggoslabs-backend.herokuapp.com";

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
    console.log(guilds);
    return { props: { guilds } };
  } catch (error) {
    console.log(error);
    return { redirect: { destination: "/" } };
  }
};

export const fetchUser = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: { destination: "/discord" } };

  try {
    const { data: user } = await axios.get<DiscordUser>(`${API_URL}/user`, {
      headers,
    });
    return { props: { user } };
  } catch (error) {
    console.log(error);
    return { redirect: { destination: "/" } };
  }
};

export const fetchGuild = async (ctx: GetServerSidePropsContext) => {
  const headers = validateCookies(ctx);
  console.log(headers);
  if (!headers) return { redirect: { destination: "/" } };
  try {
    const { data: guild } = await axios.get<DiscordGuild>(
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
    console.log(guild);
    return { props: { guild, channels } };
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
