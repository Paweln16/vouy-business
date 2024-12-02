import prisma from "@/app/lib/prisma";
import { decrypt } from "@/app/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        projectId: id,
      },
      include: {
        taggedUser: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(comments);
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const creatorId = session.userId as string;
  const { title, taggedUser, projectId } = await req.json();

  try {
    const res = await prisma.comment.create({
      data: {
        title: title,
        userId: taggedUser,
        projectId: projectId,
        creatorId: creatorId,
      },
    });

    revalidatePath(`/auth/projects/${projectId}/commnets`);
    return NextResponse.json({ message: "Comment created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const cookie = req.headers.get("authorization");
  const session = await decrypt(cookie as string);

  if (!cookie || !session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { commentId } = await req.json();
  console.log(commentId);

  try {
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
    return NextResponse.json({ message: "Comment deleted" }, { status: 202 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
