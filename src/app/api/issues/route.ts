import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const label = req.nextUrl.searchParams.get("label") || "good first issue";
  const lang = req.nextUrl.searchParams.get("lang") || "javascript";
  const page = req.nextUrl.searchParams.get("page") || "1";

  try {
    const query = `label:"${label}"+language:${lang}+state:open+is:issue`;
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    return NextResponse.json({ data: response.data });
  } catch (error) {
    console.log("MESSAGES_GET", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
