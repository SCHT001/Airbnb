"use client";
import "leaflet/dist/leaflet.css";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { MapContainer } from "react-leaflet";
import MapContents from "./MapContents";
const Map: FC<{
  form: UseFormReturn<any>;
}> = ({ form }) => {
  return (
    <div className="h-52 w-52 mb-[200px]">
      <MapContainer
        className="h-96 w-[50vh]"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <MapContents form={form}></MapContents>
      </MapContainer>
    </div>
  );
};

export default Map;
