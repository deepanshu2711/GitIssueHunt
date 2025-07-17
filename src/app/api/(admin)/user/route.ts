import { prisma } from "@/lib/primsa";
import { errorResponse, successResponse } from "@/utils/apiResponse";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return successResponse(users);
  } catch (e) {
    console.log(e);
    return errorResponse("Error occured while fetching all users");
  }
}
