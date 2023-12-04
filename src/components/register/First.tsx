"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const firstFormSchema = z.object({
  email: z.string().email().trim(),
  fullName: z.string().trim(),
});

type FirstFormSchema = z.infer<typeof firstFormSchema>;

export default function First({ currStep, setCurrStep }: any) {
  const form = useForm<FirstFormSchema>({
    resolver: zodResolver(firstFormSchema),
  });

  const onSubmit = (values: FirstFormSchema) => {
    console.log(values);
    setCurrStep(currStep + 1);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Full Name" {...field} />
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
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@gighaven.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Proceed</Button>
      </form>
    </Form>
  );
}
