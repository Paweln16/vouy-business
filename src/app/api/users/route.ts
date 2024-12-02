import { NextResponse } from "next/server";
import { decrypt } from "@/app/lib/session";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session.organizationId as string;

  try {
    const users = await prisma.user.findMany({
      where: {
        organizationId,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
