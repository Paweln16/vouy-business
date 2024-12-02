import { cookies } from "next/headers";
import Project from "./Project/Project";
import { getProject } from "@/app/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;
  const id = (await params).id;

  const project = await getProject(cookie, id);

  return (
    <div className="h-screen w-screen pt-[100px]">
      <Project project={project} />
    </div>
  );
}
