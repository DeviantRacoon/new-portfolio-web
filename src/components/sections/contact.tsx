"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactInfo } from "@/lib/data";
import { submitContactForm } from "@/app/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const initialState = {
  message: "",
  success: false,
};

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    context: state,
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Uh oh!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{contactInfo.title}</h2>
          <p className="text-lg text-muted-foreground">{contactInfo.description}</p>
          <div className="flex items-center gap-2 pt-4">
            <contactInfo.icon className="h-5 w-5 text-primary" />
            <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:underline">
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How can I help you?" rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="accent" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
