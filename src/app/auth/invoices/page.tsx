import { cookies } from "next/headers";
import Invoices from "./Invoices/Invoices";
import { getInvoices } from "@/app/lib/data";
import styles from "./styles.module.scss";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;
  const invoices = await getInvoices(cookie);

  return (
    <div className={styles.page}>
      <Invoices invoices={invoices} />
    </div>
  );
}
