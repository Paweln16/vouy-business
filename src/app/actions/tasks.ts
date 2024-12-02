"use server";

import { TaskFormSchema, FormState } from "@/definitions/tasks";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "../lib/dal";

const baseURL = process.env.BASE_URL;

export async function createTask(state: FormState, formData: FormData) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  const validatedFields = TaskFormSchema.safeParse({
    title: formData.get("title"),
    deadline: formData.get("deadline"),
    details: formData.get("details"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const res = await fetch(baseURL + "/api/tasks", {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie}`,
    },
  });
  if (!res.ok) {
    return { message: "Enter valid data" };
  }

  revalidatePath("/auth/tasks");
  return redirect("/auth/tasks");
}
