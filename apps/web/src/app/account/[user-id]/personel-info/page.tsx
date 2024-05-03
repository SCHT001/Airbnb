"use client";
import InfoCard from "@/components/account/InfoCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { user } from "@/lib/axios";
import { T_responseUserData } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userId = getCookie("airbnb_userId")!;
    setUserId(userId);
    userDataQuery.refetch();
  });

  const getUserData = async () => {
    console.log("User id", userId);
    const response = await user.get(`/user/${userId}`);
    const data: T_responseUserData = response.data;
    // console.log(data);
    return data;
  };

  const userDataQuery = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
  });

  const userForm = useForm({
    defaultValues: {
      name: userDataQuery.data?.name,
      phone: userDataQuery.data?.phone,
      email: userDataQuery.data?.email,
    },
    // resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    userDataQuery.refetch();
    userForm.setValue("name", userDataQuery.data?.name);
    userForm.setValue("phone", userDataQuery.data?.phone);
    userForm.setValue("email", userDataQuery.data?.email || "");
  }, []);

  const updateUserData = async (data: any) => {
    console.log("submitted");
    // const response = await user.put(`/user/${userId}`, data);
    // return response.data;
    // return "a";
  };

  const updateMutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div className="px-[20%] pt-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/account/${userId}`}>Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Personel info</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/*  */}
      {userDataQuery.isLoading && <div>Loading...</div>}
      {userDataQuery.isError && <div>Error</div>}
      {userDataQuery.isSuccess && (
        <div className="mt-10">
          <h1 className="text-2xl font-bold pb-10">Personel info</h1>

          <div className="userDetails">
            {/* pass dialog as children */}
            {userDataQuery.isLoading && <div>Loading...</div>}
            {userDataQuery.isSuccess && (
              <Form {...userForm}>
                <form onSubmit={userForm.handleSubmit(updateUserData)}>
                  <InfoCard
                    description={`${userDataQuery.data?.name || "Not available"} `}
                    title="Legal name"
                    linkText="Edit"
                  >
                    <Dialog>
                      <DialogTrigger>
                        <div className="action-button ">Edit</div>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="font-medium text-2xl">Legal name</div>
                        <span className="text-slate-500">
                          Make sure this matches the name on your government ID.
                        </span>
                        <FormField
                          name="name"
                          control={userForm.control}
                          render={({ field }) => {
                            return (
                              <>
                                <Label>Full name</Label>
                                <Input {...field}></Input>
                              </>
                            );
                          }}
                        ></FormField>

                        <Button type="submit">Submit</Button>
                      </DialogContent>
                    </Dialog>
                  </InfoCard>

                  <Separator className="my-5"></Separator>

                  <InfoCard
                    description={userDataQuery.data?.email || "Not provided"}
                    title="Email"
                    linkText="Edit"
                  >
                    <Dialog>
                      <DialogTrigger>
                        <div className="action-button ">Edit</div>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="font-medium text-2xl">Email</div>
                        <span className="text-slate-500">
                          Use an address you will always have acces to.
                        </span>
                        <FormField
                          name="email"
                          render={({ field }) => {
                            return (
                              <>
                                <Label>Email</Label>
                                <Input {...field}></Input>
                              </>
                            );
                          }}
                        ></FormField>
                        <Button type="submit">Submit</Button>
                      </DialogContent>
                    </Dialog>
                  </InfoCard>

                  <Separator className="my-5"></Separator>

                  <InfoCard
                    title="Phone number"
                    description={userDataQuery.data?.phone || "Not available"}
                    linkText="Edit"
                  >
                    <Dialog>
                      <DialogTrigger>
                        <div className="action-button ">Edit</div>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="font-medium text-2xl">
                          Phone numbers
                        </div>
                        <span className="text-slate-500">
                          Make sure to add a number you have access to.
                        </span>

                        <FormField
                          name="phone"
                          control={userForm.control}
                          render={({ field }) => {
                            return (
                              <>
                                <Label>Phone number</Label>
                                <Input type="number" {...field}></Input>
                              </>
                            );
                          }}
                        ></FormField>
                        <Button type="submit">Submit</Button>
                      </DialogContent>
                    </Dialog>
                  </InfoCard>

                  <Separator className="my-5"></Separator>
                </form>
              </Form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
