import { z } from "zod";

export const TaskFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters" }),
  deadline: z
    .string()
    .min(3, { message: "Deadline should be at least 3 characters" }),
  details: z
    .string()
    .min(3, { message: "Details should be at least 3 characters" }),
  status: z.string(),
});

export type FormState =
  | {
      errors?: {
        title?: string[];
        deadline?: string[];
        status?: string[];
        details?: string[];
      };
      message?: string;
    }
  | undefined;
