"use client";

import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import FloatingInput from "@/components/ui/floating-input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import Conditional from "@/components/conditional/Conditional";

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
  const [isSending, setIsSending] = useState(false);

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, message, subject } = values;

    setIsSending(true);

    try {
      await fetch(
        "https://formsubmit.co/ajax/779a1f0fbd51622e61c543e0ced860ab",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message,
          }),
        }
      );

      form.reset();

      toast.success("Message Sent!", {
        description: "I will get back to you soon.",
        action: {
          label: "Close",
          onClick: () => null,
        },
      });
    } catch (e) {
      toast.error("Message Not Sent.", {
        duration: 10000,
        description: (
          <p>
            Please try again or send me an email directly at{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:@alicalimli76@gmail.com"
              className="text-white hover:text-primary-foreground hover:underline underline-offset-1 duration:200"
            >
              alicalimli76@gmail.com
            </a>
          </p>
        ),
      });
    } finally {
      setIsSending(false);
    }
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
                <FloatingInput disabled={isSending} label="Name" {...field} />
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
                <FloatingInput disabled={isSending} label="Email" {...field} />
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
                <FloatingInput
                  disabled={isSending}
                  label="Subject"
                  {...field}
                />
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
                      disabled={isSending}
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
        <Button
          variant={"secondary"}
          disabled={isSending}
          className="w-full mt-4"
          type="submit"
        >
          <Conditional condition={isSending}>
            <LoaderIcon className="animate-spin block w-5 mr-1" />
          </Conditional>
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
