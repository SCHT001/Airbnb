import { T_Room } from "@/types";
import { Bath, Bed, BedDouble, Star } from "lucide-react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const RoomDetails: FC<{
  roomData: T_Room;
}> = ({ roomData }) => {
  return (
    <div className="mt-5 w-full">
      <div className="nameDetailsAndReview flex flex-col">
        {/* Room title */}
        <Label className="text-2xl font-medium">
          {roomData.place_type} in {roomData.location}
        </Label>
        <Label className="text-slate-700 text-lg">
          {roomData.capacity} guests · {roomData.bedrooms} bedrooms ·{" "}
          {roomData.beds} beds · {roomData.bathrooms} baths
        </Label>
        <Label className="text-slate-800 pt-2 flex gap-2">
          <Star size={15}></Star> {roomData.rating || 0}
        </Label>
      </div>

      <Separator className="my-5 w-full" />

      {/* Host details */}
      <div className="hostedBy flex gap-5">
        <Avatar className="border border-slate-400">
          <AvatarImage className="" src={roomData.host.photo}></AvatarImage>
        </Avatar>
        <div className="flex flex-col">
          <Label className="text-lg ">
            Hosted by{" "}
            <span className="font-semibold"> {roomData.host.name}</span>{" "}
          </Label>
          <Label className="text-slate-700">
            {roomData.accommodation} · Joined in 2021
          </Label>
        </div>
      </div>

      <Separator className="my-5 w-full"></Separator>

      {/* Description */}
      <div className="description">
        <Label className="text-lg font-semibold">Description</Label> <br />
        <Label className="text-slate-700">{roomData.description}</Label>
      </div>

      <Separator className="my-5 w-full"></Separator>

      {/* Room details */}
      <div className="room-details">
        <Label className="text-lg font-semibold">Room details</Label>
        <div className="flex pt-5 gap-2">
          <Card className="border border-slate-400 px-2 py-4 justify-center items-center flex flex-col w-44">
            <BedDouble size={40}></BedDouble> {roomData.bedrooms} bedrooms
          </Card>

          <Card className="border border-slate-400 px-2 py-4 justify-center items-center flex flex-col w-44">
            <Bed size={40}></Bed> {roomData.beds} beds
          </Card>

          <Card className="border border-slate-400 px-2 py-4 justify-center items-center flex flex-col w-44">
            <Bath size={40}></Bath> {roomData.bathrooms} baths
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
