"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import MapContents from "./MapContents";
const Map = () => {
  return (
    <div className="h-52 w-52 mb-[200px]">
      <MapContainer
        className="h-96 w-[50vh]"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <MapContents></MapContents>
      </MapContainer>
    </div>
  );
};

export default Map;
