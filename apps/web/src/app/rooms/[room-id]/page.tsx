"use client";
import Map from "@/components/maps/Map";
import Booking from "@/components/room/Booking";
import PhotoGrid from "@/components/room/PhotoGrid";
import Review from "@/components/room/Review";
import RoomDetails from "@/components/room/RoomDetails";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { A_favorite, listings } from "@/lib/axios";
import { T_Room } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { Heart, Share } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

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
  // isSuccess && console.log(data);

  const addToFavourite = async () => {
    const response = await A_favorite.post(`/`, {
      listing_id: roomId,
      user_id: getCookie("airbnb_userId"),
    });
    return response.data;
  };

  const favMutation = useMutation({
    mutationFn: addToFavourite,
    onSuccess: () => {
      toast.success("Added to favourites!");
    },
    onError: () => {
      toast.error("Favourite already exists!");
    },
  });

  // Fetch room data
  if (isSuccess) {
    const roomData: T_Room = data.data;
    return (
      <div className="lg:px-96 md:px-64 px-10 pt-5 flex justify-between flex-col">
        {/* Room title */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold"> {roomData.title}</h1>
          {/* share and save buttons */}

          <div className="flex flex-row justify-between">
            <Button variant={"secondary"} className="flex gap-2 bg-transparent">
              <Share size={15}></Share>
              <span className="underline">Share</span>
            </Button>
            <Button
              onClick={() => {
                favMutation.mutate();
              }}
              variant={"secondary"}
              className="flex gap-2 bg-transparent"
            >
              <Heart size={15}></Heart>
              <span className="underline">Save</span>
            </Button>
          </div>
        </div>
        {/* Room images */}
        <PhotoGrid photos={roomData.images}></PhotoGrid>
        {/* details and booking */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between pt-10">
          <RoomDetails roomData={roomData}></RoomDetails>
          <Booking roomData={roomData}></Booking>
        </div>
        {/* Ratings and revies */}
        <Review listingId={roomId}></Review>
        {/* Map */}
        <Map></Map>
      </div>
    );
  } else {
    return (
      <div className="px-96 pt-5 flex justify-between flex-col">
        <Skeleton className="h-[200px] "></Skeleton>
      </div>
    );
  }
};

export default Room;
