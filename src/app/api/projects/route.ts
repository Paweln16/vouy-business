import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session?.organizationId as string;

  const projects = await prisma.project.findMany({
    where: {
      organizationId,
    },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, deadline, details, status, netPrice, tax, price } =
    await req.json();

  const organizationId = session.organizationId as string;

  const res = await prisma.project.create({
    data: {
      organizationId,
      title,
      deadline,
      details,
      status,
      netPrice,
      tax,
      price,
    },
  });
  return NextResponse.json({ message: "Project created" }, { status: 201 });
}
