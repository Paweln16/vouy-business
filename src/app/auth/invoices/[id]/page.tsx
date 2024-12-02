import { getInvoice } from "@/app/lib/data";
import Invoice from "./Invoice/Invoice";

import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const id = (await params).id;
  const invoice = await getInvoice(cookie, id);
  return (
    <div className="h-screen w-screen pt-[100px]">
      <Invoice invoice={invoice} />
    </div>
  );
}
