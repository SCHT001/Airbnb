"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { FC } from "react";

const sampleImages = [
  {
    src: "https://picsum.photos/500",
  },
  {
    src: "https://picsum.photos/501",
  },
  {
    src: "https://picsum.photos/502",
  },
];

const CardCarousel: FC<{
  roomId: number;
  images?: {
    id: string;
    listing_id: string;
    url: string;
  }[];
}> = ({ images, roomId }) => {
  return (
    <Carousel className="w-full max-w-xs rounded-md">
      <Link href={`/rooms/${roomId}`}>
        <CarouselContent>
          {images?.map((image, index) => {
            // console.log(image.url);
            return (
              <CarouselItem className="rounded-xl" key={index}>
                <img
                  className="rounded-2xl h-52 object-cover"
                  src={image.url}
                  // width={300}
                  // height={300}
                  alt="image"
                ></img>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Link>
      <CarouselPrevious className="z-100 absolute left-[5%] bg-transparent border-none text-transparent" />
      <CarouselNext className="z-100 absolute right-[5%] bg-transparent text-transparent border-none " />
    </Carousel>
  );
};
export default CardCarousel;
