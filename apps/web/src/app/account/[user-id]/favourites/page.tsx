"use client";
import CardCarousel from "@/components/dashboard/CardCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import { A_favorite } from "@/lib/axios";
import { T_responseFavourites } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { Star } from "lucide-react";
import Link from "next/link";

const page = () => {
  const userId = getCookie("airbnb_userId");

  //   query user favourites
  const favQuery = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const response = await A_favorite.get(`/${userId}`);
      const data: T_responseFavourites = response.data;
      return data;
    },
  });

  if (favQuery.isLoading)
    return (
      <div className="px-96 pt-10">
        <Skeleton className="h-28 w-full"></Skeleton>
      </div>
    );

  return (
    <div className="px-96">
      <div className="text-2xl font-medium py-20">Favourites</div>

      {/*  */}
      <div className="grid gap-5 grid-cols-4">
        {favQuery.data?.data.map((item, index) => {
          return (
            <div
              key={index}
              className="text-sm w-fit rounded-2xl border flex flex-col   shadow-sm z-10 cursor-pointer "
            >
              {/* Images carousel for each item */}

              {/* Name and rating */}
              <CardCarousel
                images={item.listing.images}
                roomId={item.listing.id}
              />
              <Link href={`/rooms/${item.listing.id}`} className="px-2 pb-2 ">
                <div className="font-semibold  pt-5 flex justify-between">
                  <div>{item.listing.title}</div>
                  <div className="rating flex items-center">
                    <Star size={15}></Star> {item.listing.rating}
                  </div>
                </div>

                {/* Distance */}
                <div className="text-slate-500">
                  {/* {item.distance} kilometers away */}
                </div>

                {/* Cost */}
                <div className="text-slate-500 flex gap-2">
                  <span className="text-slate-600 font-semibold">
                    {item.listing.price}$
                  </span>
                  per night
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
