"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { user } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { SquareUser } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  // const userId = getCookie("airbnb_userId");

  const userDataQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await user.get(`/user/${userId}`);
      return response.data;
    },
  });

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userId = getCookie("airbnb_userId")!;
    setUserId(userId);
  }, []);

  console.log(userId);
  return (
    <div className="flex flex-col px-[25%] pt-20">
      <div className="header text-3xl font-medium">Account</div>
      <div>
        <span className="font-medium">Name</span>, email
      </div>

      <div className="cards pt-10">
        <Link href={`/account/${userId}/personel-info`}>
          <Card className="w-80 shadow-lg">
            <CardHeader>
              <CardTitle>
                <SquareUser></SquareUser>{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-medium">Personel info</span> <br />
              <span className="text-slate-500">
                Provide personel details and how we can reach you
              </span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
export default Page;
