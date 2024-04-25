"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
	images?: {
		id: string;
		listing_id: string;
		url: string;
	}[];
}> = ({ images }) => {
	return (
		<Carousel className="w-full max-w-xs rounded-md">
			<CarouselContent>
				{images?.map((image, index) => {
					console.log(image.url);
					return (
						<CarouselItem className="rounded-xl" key={index}>
							<Image
								className="rounded-2xl"
								src={image.url}
								width={300}
								height={300}
								alt="image"
							></Image>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious className="z-100 absolute left-[5%] bg-transparent border-none text-transparent" />
			<CarouselNext className="z-100 absolute right-[5%] bg-transparent text-transparent border-none " />
		</Carousel>
	);
};
export default CardCarousel;
