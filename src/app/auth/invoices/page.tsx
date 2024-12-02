import { cookies } from "next/headers";
import Invoices from "./Invoices/Invoices";
import { getInvoices } from "@/app/lib/data";

export default async function Page() {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;
  const invoices = await getInvoices(cookie);

  return (
    <div className="h-screen w-screen pt-[100px] px-[20px] overflow-hidden ">
      <Invoices invoices={invoices} />
    </div>
  );
}
