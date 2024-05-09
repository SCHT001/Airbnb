"use client";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
const Map = () => {
  const [position, setPosition] = useState(null);

  const handelClick = (e: any) => {
    setPosition(e.latlng);
  };
  const costomIcon = new Icon({
    iconUrl: "/location.png",
    iconSize: [20, 20],
  });
  return (
    <div className="h-52 w-52 mb-[200px]">
      <MapContainer
        className="h-96 w-[50vh]"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[51.505, -0.09]}
          riseOnHover
          draggable
          icon={costomIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
