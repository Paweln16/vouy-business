"use server";
import { redirect } from "next/navigation";
import { FormState, signInSchema } from "../../definitions/auth";
import { createSession, deleteSession } from "../lib/session";

const baseURL = process.env.BASE_URL;

export async function signIn(state: FormState, formData: FormData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const user = await fetch(baseURL + "/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/jsop",
    },
    body: JSON.stringify(validatedFields.data),
  }).then((res) => {
    return res.json();
  });

  await createSession(user.id, user.organizationId);

  redirect("/auth/dashboard");
}

export async function signOut() {
  await deleteSession();
  return redirect("/signin");
}
