"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { user } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { BookCheck, SquareUser, Star } from "lucide-react";
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

  if (userDataQuery.isLoading) {
    return (
      <div className="flex flex-col px-[25%] pt-20">
        <Skeleton className="h-[50px]"></Skeleton>
        <Skeleton className="h-[50px]"></Skeleton>
        <Skeleton className="h-[50px]"></Skeleton>
      </div>
    );
  }
  return (
    <div className="flex flex-col px-[25%] pt-20">
      <div className="header text-3xl font-medium">Account</div>
      <div>
        <span className="font-medium">{userDataQuery.data.name}</span>{" "}
        {userDataQuery.data.email}
      </div>

      <div className="cards pt-10 grid grid-cols-3 gap-5">
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

        {/* favourites */}

        <Link href={`/account/${userId}/favourites`}>
          <Card className="w-80 shadow-lg">
            <CardHeader>
              <CardTitle>
                <Star></Star>{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-medium">Favourites</span> <br />
              <span className="text-slate-500">
                Places you have saved in your favourites
              </span>
            </CardContent>
          </Card>
        </Link>

        {/* Bookings */}

        <Link href={`/account/${userId}/bookings`}>
          <Card className="w-80 shadow-lg h-full">
            <CardHeader>
              <CardTitle>
                <BookCheck></BookCheck>{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-medium">Bookings</span> <br />
              <span className="text-slate-500">See places you have booked</span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
export default Page;
