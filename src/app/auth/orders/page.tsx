import { getOrders } from "@/app/lib/data";
import Orders from "./Orders/Orders";
import { cookies } from "next/headers";
import styles from "./styles.module.scss";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const orders = await getOrders(cookie);
  return (
    <div className={styles.page}>
      <Orders orders={orders} />
    </div>
  );
}
