import { cookies } from "next/headers";
import Tasks from "./Tasks/Tasks";
import { getTasks } from "@/app/lib/data";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = await cookieStorage.get("session")?.value;

  const tasks = await getTasks(cookie);

  return (
    <div className="h-screen w-screen px-[20px] pt-[100px] overflow-hidden">
      <Tasks tasks={tasks} />
    </div>
  );
}
