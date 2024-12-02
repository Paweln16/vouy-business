"use server";
import { redirect } from "next/navigation";
import {
  FormState,
  ProjectCommentFormSchema,
  ProjectFormSchema,
} from "../../definitions/projects";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { verifySession } from "../lib/dal";

const baseURL = process.env.BASE_URL;

export async function createProject(prev: FormState, formData: FormData) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title"),
    deadline: formData.get("deadline"),
    details: formData.get("details"),
    status: formData.get("status"),
    netPrice: formData.get("netPrice"),
    tax: formData.get("tax"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const res = await fetch(baseURL + "/api/projects", {
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

  revalidatePath("/auth/projects");
  return redirect("/auth/projects");
}

export async function updateProject(formData: FormData, id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title"),
    deadline: formData.get("deadline"),
    details: formData.get("details"),
    status: formData.get("status"),
    netPrice: formData.get("netPrice"),
    tax: formData.get("tax"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const res = await fetch(baseURL + `/api/projects/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie}`,
    },
    method: "PUT",
    body: JSON.stringify(validatedFields.data),
  });

  if (!res.ok) {
    return { message: "Enter valid data" };
  }
  revalidatePath("/auth/projects");
}

export async function deleteProject(id: string) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStorage = await cookies();
  const cookie = cookieStorage.get("session")?.value;

  const res = await fetch(baseURL + `/api/projects/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie}`,
    },
    method: "DELETE",
  });

  if (!res.ok) {
    return { message: "Enter valid data" };
  }
  revalidatePath("/auth/projects");
  redirect("/auth/projects");
}

export async function createProjectComment(
  state: FormState,
  formData: FormData
) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  const validatedFields = ProjectCommentFormSchema.safeParse({
    title: formData.get("title"),
    taggedUser: formData.get("taggedUser"),
    projectId: formData.get("projectId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error?.flatten().fieldErrors,
    };
  }
  const projectId = validatedFields.data.projectId;
  const res = await fetch(baseURL + `/api/projects/${projectId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${cookie}`,
    },
    body: JSON.stringify(validatedFields.data),
  });

  if (!res.ok) {
    return { message: "Enter valid data" };
  }
  revalidatePath(`/auth/projects/${projectId}/comments`);
  return redirect(`/auth/projects/${projectId}/comments`);
}

export async function deleteProjectComment(
  projectId: string,
  commentId: string
) {
  const { isAuth } = await verifySession();

  if (!isAuth) {
    return;
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  const res = await fetch(baseURL + `/api/projects/${projectId}/comments`, {
    method: "DELETE",
    headers: {
      authorization: `${cookie}`,
    },
    body: JSON.stringify({ commentId }),
  });

  if (!res.ok) {
    return { message: "Enter valid data" };
  }

  revalidatePath(`/auth/projects/${projectId}/comments`);
  return redirect(`/auth/projects/${projectId}/comments`);
}
