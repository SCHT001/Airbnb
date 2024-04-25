import { host } from "@/lib/axios";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import CardCarousel from "./CardCarousel";
const ItemCard = () => {
	const [listings, setListings] = useState<
		{
			id: number;
			title: string;
			rating: number;
			price: number;
			distance: number;
			images: any[];
		}[]
	>([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await host.get("/listings");
				setListings(data.data);

				setLoading(false);
			} catch (error) {
				console.error("Error fetching listings:", error);
				return setLoading(false);
			}
		})();
	}, []);

	if (!loading) {
		return (
			<Card className="px-32 border-none grid grid-cols-6 gap-10">
				{listings.map((item, index) => {
					console.log(item);
					return (
						<Link
							href={`/rooms/${item.id}`}
							key={index}
							className="text-sm z-10 cursor-pointer "
						>
							{/* Images carousel for each item */}
							<CardCarousel images={item.images} />

							{/* Name and rating */}
							<div className="font-semibold  pt-5 flex justify-between">
								<div>{item.title}</div>
								<div className="rating flex items-center">
									<Star size={15}></Star> {item.rating}
								</div>
							</div>

							{/* Distance */}
							<div className="text-slate-500">
								{/* {item.distance} kilometers away */}
							</div>

							{/* Cost */}
							<div className="text-slate-500 flex gap-2">
								<span className="text-black font-semibold">{item.price}</span>
								night
							</div>
						</Link>
					);
				})}
			</Card>
		);
	} else return <div>Loading</div>;
};
export default ItemCard;
