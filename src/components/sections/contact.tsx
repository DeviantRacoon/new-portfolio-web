"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor ingresa un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

const initialState = {
  message: "",
  success: false,
};

export function Contact() {
  const [state, formAction] = React.useActionState(submitContactForm, initialState);
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
        title: state.success ? "¡Listo!" : "Ups...",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-20 sm:py-32 scroll-mt-24">
      <div className="mx-4 md:mx-auto grid md:grid-cols-2 gap-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Contacto</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">{contactInfo.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground">{contactInfo.description}</p>
          <div className="flex items-center gap-2 pt-4">
            <contactInfo.icon className="h-5 w-5 text-primary" />
            <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:underline">
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
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
                      <Input placeholder="tu.email@ejemplo.com" {...field} />
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
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Cómo puedo ayudarte?" rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Enviar mensaje
              </Button>
            </form>
          </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
