"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
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
	images?: string[];
}> = ({ images }) => {
	return (
		<Carousel className="w-full max-w-xs rounded-md">
			<CarouselContent>
				{images?.map((image, index) => {
					return (
						<CarouselItem className="rounded-xl" key={index}>
							<img
								className="rounded-2xl"
								src={`${image}`}
								width={300}
								height={300}
								alt="image"
							></img>
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
