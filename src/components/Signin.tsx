"use client";

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/Auth";

const loginFormSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export default function Signin() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) router.push("/");
  }, []);

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/api/auth/signin",
        data
      );

      saveUserData(response);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  const saveUserData = (data: any) => {
    localStorage.setItem("userData", data);
    router.push("/");
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto sm:max-w-md">
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
