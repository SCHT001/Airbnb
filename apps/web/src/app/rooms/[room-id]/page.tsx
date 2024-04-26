"use client";
import PhotoGrid from "@/components/room/PhotoGrid";
import RoomDetails from "@/components/room/RoomDetails";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/axios";
import { T_Room } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Heart, Share } from "lucide-react";
import { useParams } from "next/navigation";

const Room = () => {
	const params = useParams();
	const roomId = params["room-id"];

	// Fetch room data
	const { data, isSuccess } = useQuery({
		queryKey: ["a"],
		queryFn: async () => {
			const response = await listings.get(`/listing/${roomId}`);
			return response.data;
		},
	});
	isSuccess && console.log(data);

	// Fetch room data
	// console.log(roomData);
	if (isSuccess) {
		const roomData: T_Room = data.data;
		return (
			<div className="px-96 pt-5 flex justify-between flex-col">
				{/* Room title */}
				<div className="flex justify-between">
					<h1 className="text-2xl font-semibold"> {roomData.title}</h1>
					{/* share and save buttons */}

					<div className="flex flex-row justify-between">
						<Button variant={"secondary"} className="flex gap-2 bg-transparent">
							<Share size={15}></Share>
							<span className="underline">Share</span>
						</Button>
						<Button variant={"secondary"} className="flex gap-2 bg-transparent">
							<Heart size={15}></Heart>
							<span className="underline">Save</span>
						</Button>
					</div>
				</div>

				{/* Room images */}
				<PhotoGrid photos={roomData.images}></PhotoGrid>

				<RoomDetails roomData={roomData}></RoomDetails>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default Room;
