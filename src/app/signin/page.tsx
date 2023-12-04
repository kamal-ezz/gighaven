"use client";

import React from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const loginFormSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export default function Signin() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/api/auth/signin",
        data
      );

      // Handle the response from the backend
      console.log(data);
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-10">
          Sign in to your account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button>Sign in</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
