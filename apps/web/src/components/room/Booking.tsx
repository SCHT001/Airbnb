import { FC, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { T_Room } from "@/types";

const Booking: FC<{
  roomData: T_Room;
}> = ({ roomData }) => {
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
    console.log(range);
    daysCount();
  }, [range]);
  return (
    <Card className="mb-5 shadow-xl">
      <CardHeader>
        <CardTitle>
          {roomData.price} <span className="text-sm text-slate-500">night</span>{" "}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          min={4}
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-md border"
        />
        <Button className="w-full mt-5">Reserve</Button>

        <div className="priceDetails mt-5 flex flex-col gap-5">
          <p className=" ">
            ${roomData.price} x {daysCount()} nights{" "}
            <span className="float-right">${roomData.price * daysCount()}</span>
          </p>
          <Separator />
          <p className="font-bold">
            Total{" "}
            <span className="float-right">${roomData.price * daysCount()}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
