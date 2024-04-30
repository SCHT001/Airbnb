"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FC } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { nameSchema } from "../../../schema";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { Form, FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UserName: FC<{
  setSteps: any;
  loginForm: UseFormReturn<any>;
}> = ({ setSteps, loginForm }) => {
  const nameForm = useForm({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(nameSchema),
  });

  const onSubmit = async () => {
    // setName(nameForm.getValues("name"));
    console.log("submitted");
    loginForm.setValue("name", nameForm.getValues("name"));
    setSteps(4);
  };

  return (
    <div>
      <Form {...nameForm}>
        <form>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">
                What should we call you?
              </DialogTitle>
            </DialogHeader>
            <div>
              <FormField
                name="name"
                render={({ field }) => {
                  return (
                    <div>
                      <Label className="text-md font-normal">Name</Label>
                      <Input
                        type="text"
                        required
                        className="border border-slate-500"
                        placeholder="Enter your name"
                        {...field}
                      ></Input>
                    </div>
                  );
                }}
              ></FormField>
              <FormMessage className="mt-2">
                {nameForm.formState.errors.name?.message}
              </FormMessage>
            </div>
            <Button onClick={nameForm.handleSubmit(onSubmit)}>Continue</Button>
          </DialogContent>
        </form>
      </Form>
    </div>
  );
};

export default UserName;
