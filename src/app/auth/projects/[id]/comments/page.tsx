import { getProjectComments, getUsers } from "@/app/lib/data";
import Comments from "./Comments/Comments";
import { cookies } from "next/headers";
import { verifySession } from "@/app/lib/dal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const session = await verifySession();
  const userId = session.userId as string;

  const id = (await params).id;
  const comments = await getProjectComments(cookie, id);
  const users = await getUsers(cookie);

  return (
    <div className="h-screen w-screen pt-[100px]">
      <Comments
        comments={comments}
        userId={userId}
        projectId={id}
        users={users}
      />
    </div>
  );
}
