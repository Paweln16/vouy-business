import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      organizationId: true,
      password: true,
    },
  });

  if (!user) {
    return NextResponse.json("No user found");
  }

  const correctPassword = password === user.password;

  if (correctPassword) {
    return NextResponse.json(user);
  }
}
