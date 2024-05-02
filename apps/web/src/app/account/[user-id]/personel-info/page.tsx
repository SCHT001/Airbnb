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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { user } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Page = () => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const userId = getCookie("airbnb_userId")!;
    setUserId(userId);
  }, []);

  const getUserData = async () => {
    const response = await user.get(`/user/${userId}`);
    return response.data;
  };

  const userDataQuery = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
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

      <div className="mt-10">
        <h1 className="text-2xl font-bold pb-10">Personel info</h1>

        <div className="userDetails">
          {/* pass dialog as children */}
          <InfoCard
            description="sachet subedi"
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
                <Label>Full name</Label>
                <Input></Input>
                <Button>Submit</Button>
              </DialogContent>
            </Dialog>
          </InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            description="sachetsubedi001@gmail.com"
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
                <Label>Email</Label>
                <Input></Input>
                <Button>Submit</Button>
              </DialogContent>
            </Dialog>
          </InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            title="Phone number"
            description="986328085"
            linkText="Edit"
          >
            <Dialog>
              <DialogTrigger>
                <div className="action-button ">Edit</div>
              </DialogTrigger>
              <DialogContent>
                <div className="font-medium text-2xl">Phone numbers</div>
                <span className="text-slate-500">
                  Make sure to add a number you have access to.
                </span>
                <Label>Phone number</Label>
                <Input></Input>
                <Button>Submit</Button>
              </DialogContent>
            </Dialog>
          </InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            title="Government id"
            description="Not provied"
            linkText="Edit"
          >
            <Dialog>
              <DialogTrigger>
                <div className="action-button ">Edit</div>
              </DialogTrigger>
              <DialogContent>
                <div className="font-medium text-2xl">Government ID</div>
                <span className="text-slate-500">
                  Make sure to provide accurate information
                </span>
                <Label>Id number</Label>
                <Input></Input>
                <Button>Submit</Button>
              </DialogContent>
            </Dialog>
          </InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard title="Address" description="Not provided" linkText="Edit">
            <Dialog>
              <DialogTrigger>
                <div className="action-button ">Edit</div>
              </DialogTrigger>
              <DialogContent>
                <div className="font-medium text-2xl">Address</div>
                <span className="text-slate-500">
                  Make sure to provide correct information
                </span>
                <Label>Address</Label>
                <Input></Input>
                <Button>Submit</Button>
              </DialogContent>
            </Dialog>
          </InfoCard>

          <Separator className="my-5"></Separator>
        </div>
      </div>
    </div>
  );
};

export default Page;
