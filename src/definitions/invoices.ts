import { z } from "zod";

export const InvoiceFormSchema = z.object({
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
  type: z.string(),
  netPrice: z
    .string()
    .min(3, { message: "Net price should be at least 3 characters" }),
  tax: z.string().min(2, { message: "Tax should be at least 3 characters" }),
  price: z
    .string()
    .min(3, { message: "Price should be at least 3 characters" }),
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
