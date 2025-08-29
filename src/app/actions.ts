"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(1000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Form data received:", validatedFields.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can add your email sending logic here (e.g., using Resend, Nodemailer)

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
