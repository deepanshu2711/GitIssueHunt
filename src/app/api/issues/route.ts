import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page") || "1";
  const lang = req.nextUrl.searchParams.get("lang") || "javascript";
  const label = req.nextUrl.searchParams.get("label") || "good first issue";


  try {
    const response = await axios.get(`https://api.github.com/search/issues?q=label:%22${label}%22+language:${lang}+state:open+is:issue&page=${page}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    })

    return NextResponse.json({
      data: response.data
    })

  } catch (error) {
    console.log("MESSAGES_GET", error)
    return new NextResponse("internal error", { status: 500 })
  }
}
