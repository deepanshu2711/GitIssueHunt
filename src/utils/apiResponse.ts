import { NextResponse } from "next/server";

export const successResponse = <T>(
  data: T,
  message: string = "Request Successful",
  status: number = 200,
) => {
  return NextResponse.json({ data, success: true, message }, { status });
};

export const errorResponse = (
  message: string = "An error occured",
  status: number = 500,
) => {
  return NextResponse.json({ data: null, success: false, message }, { status });
};
