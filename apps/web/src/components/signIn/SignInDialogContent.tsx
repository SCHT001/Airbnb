"use client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { LoginFormSchema } from "../../../schema";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CountrySelect from "./CountrySelect";

const SignInDialogContent: FC<{
  steps: number;
  setSteps: any;
  loginForm: UseFormReturn<any>;
}> = ({ setSteps, steps, loginForm }) => {
  const signWithGoogle = async () => {
    const result = await signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };

  // Initialize form

  const userForm = useForm({
    defaultValues: {
      phone: 0,
      countryCode: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = (e: any) => {
    // console.log(userForm.getValues());
    // setPhone(userForm.getValues().phone);
    // setCountryCode(userForm.getValues().countryCode);
    loginForm.setValue("phone", userForm.getValues("phone"));
    loginForm.setValue("countryCode", userForm.getValues("countryCode"));
    return setSteps(steps + 1);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex justify-center">
          Log in or sign up
        </DialogTitle>
      </DialogHeader>

      <Separator className="bg-slate-300"></Separator>

      <Form {...userForm}>
        <form onSubmit={userForm.handleSubmit(onSubmit)}>
          <div className="flex gap-5 flex-col">
            <Label className="text-2xl  text-black">Welcome to Airbnb</Label>
            {/* Country select and number input */}
            {/* Form field for country select */}
            <FormField
              name="countryCode"
              render={({ field }) => {
                return (
                  <>
                    <CountrySelect field={field}></CountrySelect>
                    <div className="text-destructive">
                      {userForm.formState.errors.countryCode?.message}
                    </div>
                  </>
                );
              }}
            ></FormField>
            {/* phone */}
            <FormField
              name="phone"
              render={({ field }) => {
                return (
                  <>
                    <Input
                      required
                      {...field}
                      placeholder="Phone number"
                      className={
                        (cn(
                          userForm.formState.errors.phone?.message
                            ? "border-destructive"
                            : ""
                        ),
                        "rounded-t-none z-100 text-black")
                      }
                      type="number"
                    ></Input>
                    <div className="text-destructive">
                      {userForm.formState.errors.phone?.message}
                    </div>
                  </>
                );
              }}
            ></FormField>
            {/* Label */} <br />
            <Label className="text-sm pb-10 text-black">
              We will call or text you to confirm your number. Standard message
              and data rates apply. &nbsp;
              <Link href={"/"} className="underline">
                Privacy policy
              </Link>
            </Label>
            {/* Submit button */}
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white w-full h-10 rounded-md"
            >
              Continue
            </Button>
            {/* or separator */}
            <div className="flex gap-2 items-center justify-between">
              <div className="w-full h-[1px] bg-black"></div>

              <div>or</div>

              <div className="w-full h-[1px] bg-black"></div>
            </div>
            {/* Sign up with providers */}
            <div className="provider-buttons flex gap-5 flex-col">
              {/* google */}
              <Button
                onClick={signWithGoogle}
                variant={"outline"}
                className="text-black border-black w-full flex justify-between items-center"
              >
                <Image
                  alt="Google"
                  src={"/google.png"}
                  width={20}
                  height={20}
                  className="place-self-start"
                ></Image>
                <div className="self-center w-full">Continue with Google</div>
              </Button>

              {/* Facebook */}
              <Button
                variant={"outline"}
                className="text-black border-black w-full flex justify-between items-center"
              >
                <Image
                  alt="Facebook"
                  src={"/facebook.png"}
                  width={20}
                  height={20}
                  className="place-self-start"
                ></Image>
                <div className="self-center w-full">Continue with Facebook</div>
              </Button>

              {/* Apple */}
              <Button
                variant={"outline"}
                className="text-black border-black w-full flex justify-between items-center"
              >
                <Image
                  alt="Apple"
                  src={"/apple.png"}
                  width={20}
                  height={20}
                  className="place-self-start"
                ></Image>
                <div className="self-center w-full">Continue with Apple</div>
              </Button>

              {/* Mail */}

              <Button
                variant={"outline"}
                className="text-black border-black w-full flex justify-between items-center"
              >
                <Image
                  alt="Mail"
                  src={"/mail.png"}
                  width={20}
                  height={20}
                  className="place-self-start"
                ></Image>
                <div className="self-center w-full">Continue with Email</div>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default SignInDialogContent;
