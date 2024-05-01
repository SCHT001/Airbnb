import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormField } from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const OTPConfirm: FC<{
  phone: string;
  countryCode: string;
  setSteps: any;
}> = ({ phone, countryCode, setSteps }) => {
  // OTP form INIT

  const otpForm = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const otpSubmit = async (data: any) => {
    // Submit OTP
    setSteps(3);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm your number</DialogTitle>
      </DialogHeader>

      <Separator></Separator>

      <Label className="text-md font-normal">
        Enter the code we have sent to{" "}
        <span className="font-semibold">
          {countryCode} {phone}
        </span>
      </Label>
      <Form {...otpForm}>
        <form onSubmit={otpForm.handleSubmit(otpSubmit)}>
          <FormField
            name="otp"
            render={({ field }) => {
              return (
                <InputOTP maxLength={6} className="w-full" {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={0}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                    <InputOTPSlot
                      index={1}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                    <InputOTPSlot
                      index={2}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                    <InputOTPSlot
                      index={3}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                    <InputOTPSlot
                      index={4}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                    <InputOTPSlot
                      index={5}
                      className="border-slate-300 border"
                    ></InputOTPSlot>
                  </InputOTPGroup>
                </InputOTP>
              );
            }}
          ></FormField>

          <Separator className="my-5"></Separator>

          <div className="flex justify-between items-center ">
            <Link href={"/"} className="text-sm underline">
              More options
            </Link>
            <Button type="submit">Verify</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default OTPConfirm;
