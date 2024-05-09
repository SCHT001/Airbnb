"use client";
import { useState } from "react";
import Map from "../maps/Map";
import { Card } from "../ui/card";

const Location = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  return (
    <div className="flex items-center justify-center">
      <Card className="border-none shadow-none"></Card>
      <Map></Map>
    </div>
  );
};

export default Location;
