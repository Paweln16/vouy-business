"use server";
import { redirect } from "next/navigation";
import { FormState, InvoiceFormSchema } from "../../definitions/invoices";
import { cookies } from "next/headers";
import { verifySession } from "../lib/dal";
import { revalidatePath } from "next/cache";

const baseURL = process.env.BASE_URL;

export async function createInvoice(prev: FormState, formData: FormData) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const validatedFields = InvoiceFormSchema.safeParse({
    title: formData.get("title"),
    deadline: formData.get("deadline"),
    details: formData.get("details"),
    status: formData.get("status"),
    type: formData.get("type"),
    netPrice: formData.get("netPrice"),
    tax: formData.get("tax"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const res = await fetch(baseURL + "/api/invoices", {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie}`,
    },
  });
  if (!res.ok) {
    return { message: "Error creaing an invoice" };
  }

  revalidatePath("/auth/invoices");
  return redirect("/auth/invoices");
}

export async function updateInvoice(formData: FormData, id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const validatedFields = InvoiceFormSchema.safeParse({
    title: formData.get("title"),
    deadline: formData.get("deadline"),
    details: formData.get("details"),
    status: formData.get("status"),
    type: formData.get("type"),
    netPrice: formData.get("netPrice"),
    tax: formData.get("tax"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const res = await fetch(baseURL + `/api/invoices/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie}`,
    },
    body: JSON.stringify(validatedFields.data),
  });
  if (!res.ok) {
    return { message: "Enter valid data" };
  }
  revalidatePath("/auth/invoices");
}

export async function deleteInvoice(id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const res = await fetch(baseURL + `/api/invoices/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${cookie}`,
    },
  });
  if (!res.ok) {
    return { message: "Error deleting invoice" };
  }

  revalidatePath("/auth/invoices");
  return redirect("/auth/invoices");
}
