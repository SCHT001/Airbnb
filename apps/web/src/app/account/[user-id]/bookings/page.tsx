"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { A_booking } from "@/lib/axios";
import { T_responseUserBookings } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Link from "next/link";

const page = () => {
  const userBookingsQuery = useQuery({
    queryKey: ["userBookings"],
    queryFn: async () => {
      const response = await A_booking.get(
        `/user/${getCookie("airbnb_userId")}`
      );
      const data: T_responseUserBookings = response.data;
      return data;
    },
  });

  return (
    <div className="px-96">
      <Card className="shadow-none border-none">
        <CardHeader>
          <CardTitle>Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {userBookingsQuery.data?.data.map((booking) => {
            return (
              <Link
                href={`/rooms/${booking.listing_id}`}
                className="border rounded-lg p-5 mb-5 shadow-md flex justify-between"
              >
                <div className="name-and-price">
                  <div className="name font-medium">
                    {booking.listing.title}
                    &nbsp; at &nbsp;
                    {booking.listing.location}
                  </div>
                  <div className="text-sm text-slate-500">
                    {" "}
                    {booking.total_price}$
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    {new Date(booking.check_in_date).toDateString()} -{" "}
                    {new Date(booking.check_out_date).toDateString()}
                  </div>
                  <div className="text-sm text-slate-500">
                    status: {booking.status}
                  </div>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
