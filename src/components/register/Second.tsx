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

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const secondFormSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  accountType: z.enum(["Freelancer", "Employer"]),
});

type SecondFormSchema = z.infer<typeof secondFormSchema>;

export default function Second({
  currStep,
  setCurrStep,
  nameAndEmailData,
}: any) {
  const navigate = useNavigate();

  const form = useForm<SecondFormSchema>({
    resolver: zodResolver(secondFormSchema),
  });

  const onSubmit = async (values: SecondFormSchema) => {
    const obj = {
      name: nameAndEmailData.name,
      email: nameAndEmailData.email,
      role: values.accountType,
      password: values.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8888/api/auth/signup",
        obj
      );

      saveUserData(response);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  const lastStep = () => {
    if (currStep >= 1) setCurrStep(currStep - 1);
  };

  const saveUserData = (data: any) => {
    localStorage.setItem("userData", data);
    navigate("/");
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
                      value="Employer"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="employer-option"
                    className={`inline-flex items-center justify-between w-full p-5  hover:text-gray-600 hover:bg-gray-50 bg-white border-2  rounded-lg cursor-pointer ${
                      field.value !== "Employer"
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
                      value="Freelancer"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="freelancer-option"
                    className={`inline-flex items-center justify-between w-full p-5  hover:text-gray-600 hover:bg-gray-50 bg-white border-2  rounded-lg cursor-pointer ${
                      field.value !== "Freelancer"
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
