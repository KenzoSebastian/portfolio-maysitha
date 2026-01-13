import { z } from "zod";

export const sendEmailSchema = z.object({
  fullname: z
    .string({ message: "Fullname is required" })
    .min(2, { message: "Fullname must be at least 2 characters" }),
  email: z.email({ message: "invalid email" }),
  message: z
    .string({ message: "Message is required" })
    .min(2, { message: "Message must be at least 2 characters" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

export type SendEmailSchemaValue = z.infer<typeof sendEmailSchema>;