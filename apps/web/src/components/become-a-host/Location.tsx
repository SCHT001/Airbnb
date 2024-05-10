"use client";
import { FC, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Map from "../maps/Map";
import { Card, CardHeader, CardTitle } from "../ui/card";

const Location: FC<{
  form: UseFormReturn<any>;
}> = ({ form }) => {
  const [position, setPosition] = useState([51.505, -0.09]);

  return (
    <div className="flex items-center justify-center">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Select your location</CardTitle>
          <span className="text-sm text-slate-400">
            Default location: [51.505, -0.09] london
          </span>
        </CardHeader>
        <Map form={form}></Map>
      </Card>
    </div>
  );
};

export default Location;
