import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("authorization");
  const session = await decrypt(token as string);
  const userId = session?.userId as string;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, deadline, details, status } = await req.json();

  const userId = session.userId as string;

  const res = await prisma.task.create({
    data: {
      userId,
      title,
      deadline,
      details,
      status,
    },
  });
  return NextResponse.json({ message: "Project created" }, { status: 201 });
}
