import { z } from "zod";

export const ProjectFormSchema = z.object({
  title: z.string(),
  deadline: z.string(),
  details: z.string(),
  status: z.string(),
  netPrice: z.string(),
  tax: z.string(),
  price: z.string(),
});

export type FormState =
  | {
      errors?: {
        title?: string[];
        deadline?: string[];
        status?: string[];
        details?: string[];
        netPrice?: string[];
        tax?: string[];
        price?: string[];
      };
      message?: string;
    }
  | undefined;

export const ProjectCommentFormSchema = z.object({
  title: z.string(),
  taggedUser: z.string(),
  projectId: z.string(),
});
