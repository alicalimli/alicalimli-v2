"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import FloatingInput from "@/components/ui/floating-input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string().min(2, {
    message: "Name must be at least 4 characters.",
  }),
  message: z.string().min(24, {
    message: "Message must be at least 24 characters.",
  }),
});

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const formErrors = form.formState.errors;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem error={formErrors.name?.message} className="flex-1">
              <FormControl>
                <FloatingInput label="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem error={formErrors.email?.message}>
              <FormControl>
                <FloatingInput label="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem
              error={formErrors.subject?.message}
              className="basis-full"
            >
              <FormControl>
                <FloatingInput label="Subject" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem
              error={formErrors.message?.message}
              className="basis-full"
            >
              <FormControl>
                <FloatingInput
                  customInput={(inputId, className) => (
                    <textarea
                      id={inputId}
                      className={cn(className, "resize-none h-40")}
                      {...field}
                      placeholder=""
                    />
                  )}
                  label="Type your message here."
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full mt-4" type="submit">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
