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
  FormDescription,
} from "@/components/ui/form";
import { contactInfo } from "@/lib/data";
import { submitContactForm } from "@/app/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50, { message: "El nombre no debe exceder 50 caracteres." }),
  email: z
    .string()
    .trim()
    .email({ message: "Por favor ingresa un email válido." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(1000, { message: "El mensaje no debe exceder 1000 caracteres." }),
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
    mode: "onChange",
    reValidateMode: "onChange",
    delayError: 300,
    shouldFocusError: true,
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

  const { isDirty, isValid, isSubmitting } = form.formState;
  const disabledReason = isSubmitting
    ? "Enviando..."
    : !isDirty
    ? "Primero llena el formulario"
    : !isValid
    ? "Corrige los campos con error"
    : undefined;

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
            <form action={formAction} noValidate className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        maxLength={50}
                        autoComplete="name"
                        className={
                          form.formState.errors.name
                            ? "border-destructive focus-visible:ring-destructive"
                            : (form.formState.dirtyFields.name || form.formState.touchedFields.name)
                            ? "border-emerald-500 focus-visible:ring-emerald-500"
                            : undefined
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>2–50 caracteres.</FormDescription>
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
                      <Input
                        placeholder="tu.email@ejemplo.com"
                        inputMode="email"
                        autoComplete="email"
                        className={
                          form.formState.errors.email
                            ? "border-destructive focus-visible:ring-destructive"
                            : (form.formState.dirtyFields.email || form.formState.touchedFields.email)
                            ? "border-emerald-500 focus-visible:ring-emerald-500"
                            : undefined
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Usa un email válido.</FormDescription>
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
                      <Textarea
                        placeholder="¿Cómo puedo ayudarte?"
                        rows={5}
                        maxLength={1000}
                        className={
                          form.formState.errors.message
                            ? "border-destructive focus-visible:ring-destructive"
                            : (form.formState.dirtyFields.message || form.formState.touchedFields.message)
                            ? "border-emerald-500 focus-visible:ring-emerald-500"
                            : undefined
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {`${(form.watch("message")?.length ?? 0)}/1000 caracteres`}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      className="inline-flex w-full sm:w-auto"
                      tabIndex={disabledReason ? 0 : -1}
                      aria-disabled={!!disabledReason}
                    >
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={!isDirty || !isValid || isSubmitting}
                        aria-busy={isSubmitting}
                        title={disabledReason}
                      >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </span>
                  </TooltipTrigger>
                  {disabledReason ? (
                    <TooltipContent>{disabledReason}</TooltipContent>
                  ) : null}
                </Tooltip>
              </TooltipProvider>
            </form>
          </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
