import { T_Room } from "@/types";
import { Star } from "lucide-react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
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
          <AvatarImage className="" src="/user_default.png"></AvatarImage>
        </Avatar>
        <div className="flex flex-col">
          <Label className="text-lg font-semibold">Hosted by {}</Label>
          <Label className="text-slate-700">
            {roomData.accommodation} · Joined in 2021
          </Label>
        </div>
      </div>
      <Separator className="my-5 w-full"></Separator>
    </div>
  );
};

export default RoomDetails;
