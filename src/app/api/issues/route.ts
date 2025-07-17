import { NextRequest } from "next/server";

import { issueService } from "@/services/issueService";
import { errorResponse, successResponse } from "@/utils/apiResponse";

export async function GET(req: NextRequest) {
  const label = req.nextUrl.searchParams.get("label") || "good first issue";
  const lang = req.nextUrl.searchParams.get("lang") || "javascript";
  const page = req.nextUrl.searchParams.get("page") || "1";

  try {
    const query = `label:"${label}"+language:${lang}+state:open+is:issue`;
    console.log(query);
    const response = await issueService.getAll(query, page);
    return successResponse(response);
  } catch (error) {
    console.log(error);
    return errorResponse("Error while fetching issues");
  }
}
