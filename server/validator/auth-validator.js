import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string({ required_error: "name is requird" })
    .trim()
    .min(3, { messege: "minimum three character is required" }),
  email: z
    .string({ required_error: "email is required " })
    .trim()
    .email({ message: "invalid email" }),
  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(9, { message: "must be greater then 10" }),
  password: z
    .string({ required_error: "passord is requird" })
    .min(7, { message: "greater than 7" }),
});

// module.exports = signUpSchema;

export const loginSchema = z.object({
  email: z
    .string({ required_error: "email is require" })
    .trim()
    .min(3, { message: "more then 3 latters" }),
  password: z
    .string({ required_error: "password is require" })
    .min(6, { message: "at least six charachter" }),
});
export const clientFormSchemaValidator = z.object({
  username: z
    .string({ required_error: "email is require" })
    .trim()
    .min(2, { message: "minimun4 character" }),
  email: z.string({ required_error: "email is require" }).email(),
  message: z
    .string({ required_error: "please fill the form" })
    .trim()
    .min(5, { message: "your message must be at least five characters" }),
});
