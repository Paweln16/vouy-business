import { getOrders } from "@/app/lib/data";
import Orders from "./Orders/Orders";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const orders = await getOrders(cookie);
  return (
    <div className="h-screen w-screen pt-[100px] px-[20px] overflow-hidden ">
      <Orders orders={orders} />
    </div>
  );
}
