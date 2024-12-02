import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session.organizationId as string;
  try {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id,
        organizationId,
      },
    });

    return NextResponse.json(invoice, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const id = (await params).id;
  const organizationId = session.organizationId as string;

  const { title, deadline, details, status, type, netPrice, tax, price } =
    await req.json();

  try {
    await prisma.invoice.update({
      where: {
        id,
        organizationId,
      },
      data: {
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

    return NextResponse.json({ message: "Invoice updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const id = (await params).id;
  const organizationId = session.organizationId as string;

  try {
    await prisma.invoice.delete({
      where: {
        id,
        organizationId,
      },
    });

    return NextResponse.json({ message: "Invoice deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
