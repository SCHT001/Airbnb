"use client";
import { sampleItems } from "@/components/dashboard/sampleItems";
import PhotoGrid from "@/components/room/PhotoGrid";
import RoomDetails from "@/components/room/RoomDetails";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Heart, Share } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Room = () => {
	useEffect(() => {
		// Fetch room data

		const queriedData = useQuery({
			queryKey: ["a"],
			queryFn: () => {
				return;
			},
		});
		// Fetch room data
	}, []);

	const params = useParams();
	const roomId = params["room-id"]; // Fix this line
	return (
		<div className="px-96 pt-5 flex justify-between flex-col">
			{/* Room title */}
			<div className="flex justify-between">
				<h1 className="text-2xl font-semibold"> Room title</h1>
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
			<PhotoGrid photos={sampleItems[0].images}></PhotoGrid>

			<RoomDetails></RoomDetails>
		</div>
	);
};

export default Room;
