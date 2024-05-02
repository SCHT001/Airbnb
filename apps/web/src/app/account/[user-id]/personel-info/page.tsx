"use client";
import InfoCard from "@/components/account/InfoCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { getCookie } from "cookies-next";

const Page = () => {
  const userId = getCookie("airbnb_userId");

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
          <InfoCard
            description="sachet subedi"
            title="Legal name"
            linkText="edit"
          ></InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            description="sachetsubedi001@gmail.com"
            title="Email"
            linkText="edit"
          ></InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            title="Phone number"
            description="986328085"
            linkText="edit"
          ></InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            title="Government id"
            description="Not provied"
            linkText="edit"
          ></InfoCard>

          <Separator className="my-5"></Separator>

          <InfoCard
            title="Address"
            description="Not provided"
            linkText="edit"
          ></InfoCard>

          <Separator className="my-5"></Separator>
        </div>
      </div>
    </div>
  );
};

export default Page;
