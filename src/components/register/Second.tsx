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
import { Label } from "@radix-ui/react-label";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { RadioGroup } from "../ui/radio-group";

const secondFormSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  accountType: z.enum(["freelancer", "employer"]),
});

type SecondFormSchema = z.infer<typeof secondFormSchema>;

export default function Second({ currStep, setCurrStep }: any) {
  const form = useForm<SecondFormSchema>({
    resolver: zodResolver(secondFormSchema),
  });

  const onSubmit = (values: SecondFormSchema) => {
    console.log(values);
  };

  const lastStep = () => {
    if (currStep >= 1) setCurrStep(currStep - 1);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="mb-5 text-lg font-medium text-gray-900">
          Choose Account Type:
        </h3>

        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex justify-between"
              >
                <FormItem>
                  <FormControl>
                    <RadioGroupItem
                      id="employer-option"
                      className="hidden"
                      value="employer"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="employer-option"
                    className={`inline-flex items-center justify-between w-full p-5  hover:text-gray-600 hover:bg-gray-50 bg-white border-2  rounded-lg cursor-pointer ${
                      field.value !== "employer"
                        ? " border-gray-200 text-gray-500"
                        : "border-blue-600 text-gray-600"
                    }`}
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Employer
                      </div>
                      <div className="w-full text-sm">Hiring People</div>
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormControl>
                    <RadioGroupItem
                      id="freelancer-option"
                      className="hidden peer/freelancer"
                      value="freelancer"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="freelancer-option"
                    className={`inline-flex items-center justify-between w-full p-5  hover:text-gray-600 hover:bg-gray-50 bg-white border-2  rounded-lg cursor-pointer ${
                      field.value !== "freelancer"
                        ? " border-gray-200 text-gray-500"
                        : "border-blue-600 text-gray-600"
                    }`}
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Freelancer
                      </div>
                      <div className="w-full text-sm">Looking for Jobs</div>
                    </div>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
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
        <div className="flex gap-5">
          <Button onClick={lastStep}>Back</Button>
          <Button type="submit">Register</Button>
        </div>
      </form>
    </Form>
  );
}
