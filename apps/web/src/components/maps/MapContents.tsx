import { Icon, LatLngTuple } from "leaflet";
import { useState } from "react";
import { Marker, TileLayer, useMap } from "react-leaflet";

const MapContents = () => {
  const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]);

  const map = useMap();

  map.locate().on("locationfound", (e) => {
    map.flyTo(e.latlng);
  });

  map.on("click", (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  });

  const costomIcon = new Icon({
    iconUrl: "/location.png",
    iconSize: [20, 20],
  });
  return (
    <div>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        riseOnHover
        draggable
        icon={costomIcon}
      ></Marker>
    </div>
  );
};

export default MapContents;
