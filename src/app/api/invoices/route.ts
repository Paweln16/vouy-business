import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session.organizationId as string;
  const invoices = await prisma.invoice.findMany({
    where: {
      organizationId,
    },
  });

  return NextResponse.json(invoices, { status: 200 });
}

export async function POST(req: Request) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, deadline, details, status, type, netPrice, tax, price } =
    await req.json();

  const organizationId = session.organizationId as string;

  try {
    await prisma.invoice.create({
      data: {
        organizationId,
        title,
        deadline,
        details,
        status,
        type,
        netPrice,
        tax,
        price,
      },
    });
    return NextResponse.json({ message: "Invoice created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
