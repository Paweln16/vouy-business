import Projects from "./Projects/Projects";
import Orders from "./Orders/Orders";
import Tasks from "./Tasks/Tasks";
import { cookies } from "next/headers";
import { getProjects, getTasks, getOrders } from "@/app/lib/data";
import Revenue from "./Revenue/Revenue";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie: string | undefined = cookieStorage.get("session")?.value;

  const projects = await getProjects(cookie);
  const orders = await getOrders(cookie);
  const tasks = await getTasks(cookie);

  return (
    <div className="w-screen h-screen pt-[100px] flex p-[30px] gap-[20px] justify-center overflow-hidden">
      <div className="w-[50%] h-full flex flex-col justify-center items-center gap-[20px]">
        <Projects projects={projects} />
        <Orders orders={orders} />
      </div>
      <div className="h-full w-[50%] flex flex-col justify-center items-center gap-[20px]">
        <Tasks tasks={tasks} />
        <Revenue />
      </div>
    </div>
  );
}
