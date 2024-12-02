import { getUsers } from "@/app/lib/data";
import Users from "./Users/Users";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const users = await getUsers(cookie);

  return (
    <div className="h-screen w-screen pt-[100px] px-[20px] flex flex-col overflow-hidden">
      <Users users={users} />
    </div>
  );
}
