import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const organizationId = session.organizationId as string;
  const id = (await params).id;

  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
        organizationId,
      },
    });

    return NextResponse.json(project, { status: 200 });
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

  const organizationId = session.organizationId as string;
  const id = (await params).id;

  const { title, deadline, details, status, netPrice, tax, price } =
    await req.json();

  try {
    const project = await prisma.project.update({
      where: {
        id,
        organizationId,
      },
      data: {
        title,
        deadline,
        details,
        status,

        netPrice,
        tax,
        price,
      },
    });
    revalidatePath(`/auth/projects/${id}`);
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
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

  const organizationId = session.organizationId as string;
  const id = (await params).id;

  try {
    await prisma.project.delete({
      where: {
        id,
        organizationId,
      },
    });

    return NextResponse.json({ message: "Project deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
