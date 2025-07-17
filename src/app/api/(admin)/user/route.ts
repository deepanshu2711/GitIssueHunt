import { prisma } from "@/lib/primsa";
import { errorResponse, successResponse } from "@/utils/apiResponse";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return successResponse(users);
  } catch (e) {
    console.log(e);
    return errorResponse("Error occured while fetching all users");
  }
}
