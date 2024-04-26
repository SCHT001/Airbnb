import { T_Room } from "@/types";
import { FC } from "react";
import { Avatar } from "../ui/avatar";
import { Label } from "../ui/label";

const RoomDetails: FC<{
	roomData: T_Room;
}> = ({ roomData }) => {
	return (
		<div className="mt-5">
			<div className="nameDetailsAndReview flex flex-col">
				{/* Room title */}
				<Label className="text-2xl font-medium">{roomData.title} </Label>
				<Label className="text-slate-700 text-lg">
					{roomData.capacity} guests · {roomData.bedrooms} bedrooms ·{" "}
					{roomData.beds} beds · {roomData.bathrooms} baths
				</Label>
				<Label className="text-slate-800">{roomData.rating}</Label>
			</div>

			<div className="hostedBy">
				<Avatar></Avatar>
			</div>
		</div>
	);
};

export default RoomDetails;
