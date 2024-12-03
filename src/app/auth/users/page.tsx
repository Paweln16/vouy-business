import { getUsers } from "@/app/lib/data";
import Users from "./Users/Users";
import { cookies } from "next/headers";
import styles from "./styles.module.scss";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const users = await getUsers(cookie);

  return (
    <div className={styles.page}>
      <Users users={users} />
    </div>
  );
}
