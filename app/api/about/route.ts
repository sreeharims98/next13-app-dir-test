import { NextResponse } from "next/server";
import about from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(about);
}
