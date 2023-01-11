import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  URLPattern,
} from "next/server";
import { fetchValidGuild } from "./utils/api";

const validateMiddlewareCookies = (req: NextRequest) => {
  const sessionID = req.cookies.get("connect.sid")?.value;
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};

const params = (url: string) => {
  const input = url.split("?")[0];
  let result = {};
  const pattern = new URLPattern({ pathname: "/:locale/:slug" });
  const patternResult = pattern.exec(input);
  return patternResult;
};

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // const headers = validateMiddlewareCookies(req);
  // console.log(headers);
  // if (!headers) return NextResponse.rewrite(new URL("/", req.url));
  // if (!param) return NextResponse.rewrite(new URL("/menu", req.url));
  // console.log(param);
  // //@ts-ignore
  // const { id } = param;
  // const response = await fetchValidGuild(id, headers);
  // return response.status === 200
  //   ? NextResponse.next()
  //   : NextResponse.redirect("/");
}
