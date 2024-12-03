import { cookies } from "next/headers";
import Tasks from "./Tasks/Tasks";
import { getTasks } from "@/app/lib/data";
import styles from "./styles.module.scss";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = await cookieStorage.get("session")?.value;

  const tasks = await getTasks(cookie);

  return (
    <div className={styles.page}>
      <Tasks tasks={tasks} />
    </div>
  );
}
