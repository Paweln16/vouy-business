import styles from "./styles.module.scss";

import Projects from "./Projects/Projects";
import { cookies } from "next/headers";
import { getProjects } from "@/app/lib/data";

export default async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  const projects = await getProjects(cookie);

  return (
    <div className={styles.page}>
      <Projects projects={projects} />
    </div>
  );
}
