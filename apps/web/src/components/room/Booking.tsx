"use client";
import { A_booking } from "@/lib/axios";
import { T_Room } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { FC, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const Booking: FC<{
  roomData: T_Room;
}> = ({ roomData }) => {
  let bookedDates: Date[] = [];
  // query for already booked dates
  const { isSuccess, data } = useQuery({
    queryKey: ["bookedDates"],
    queryFn: async () => {
      const response = await A_booking.get(`/${roomData.id}`);
      return response.data;
    },
  });

  const [range, setRange] = useState<DateRange | undefined>();

  //  count the no of days selected
  const daysCount = () => {
    const startDate = new Date(range?.from!);
    const endDate = new Date(range?.to!);

    // Calculate the time difference in milliseconds
    const timeDifference = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days (one day has 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (numberOfDays) return numberOfDays;
    return 0;
  };

  useEffect(() => {
    daysCount();
  }, [range]);

  const bookPlace = async () => {
    try {
      const response: AxiosResponse = await A_booking.post("/add", {
        listing_id: roomData.id,
        range: range,
        user_id: getCookie("airbnb_userId"),
      });

      if (response.data) {
        setTimeout(() => {
          location.reload();
        }, 300);
        return toast.success("Room booked successfully");
      }
    } catch (e) {
      return toast.error("Failed to book room");
    }
  };

  if (isSuccess) {
    const bookedDates = data.bookings.map(
      (date: { date: Date; id: string; listing_id: string; isBooked: any }) => {
        return new Date(date.date);
      }
    );
    // console.log(bookedDates);
    return (
      <Card className="mb-5 shadow-xl">
        <CardHeader>
          <CardTitle>
            {roomData.price}{" "}
            <span className="text-sm text-slate-500">night</span>{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            min={4}
            mode="range"
            selected={range}
            onSelect={setRange}
            className="rounded-md border"
            disabled={bookedDates}
          />
          <Button onClick={bookPlace} className="w-full mt-5">
            Reserve
          </Button>

          <div className="priceDetails mt-5 flex flex-col gap-5">
            <p className=" ">
              ${roomData.price} x {daysCount()} nights{" "}
              <span className="float-right">
                ${roomData.price * daysCount()}
              </span>
            </p>
            <Separator />
            <p className="font-bold">
              Total{" "}
              <span className="float-right">
                ${roomData.price * daysCount()}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
};

export default Booking;
