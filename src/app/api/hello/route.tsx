// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "hello Next Js 2" });
// }

// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = request.headers.get("Origin");

  // Define allowed origins
  const allowedOrigins = ["https://my-app-2-red.vercel.app"];

  // Check if the request's origin is allowed
  if (!allowedOrigins.includes(origin || "")) {
    return new NextResponse("CORS error: Origin not allowed", { status: 403 });
  }

  return NextResponse.json({ message: "hello Next Js 2" });
}
