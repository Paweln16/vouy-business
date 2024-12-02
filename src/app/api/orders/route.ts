import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("authorization");
  const session = await decrypt(token as string);

  if (!token || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session.organizationId as string;

  const orders = await prisma.order.findMany({
    where: {
      organizationId,
    },
  });

  return NextResponse.json(orders, { status: 200 });
}
