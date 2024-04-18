import { Star } from "lucide-react";
import { Card } from "../ui/card";
import CardCarousel from "./CardCarousel";
import { sampleItems } from "./sampleItems";
const ItemCard = () => {
	return (
		<Card className="px-32 border-none grid grid-cols-6 gap-10">
			{sampleItems.map((item, index) => {
				return (
					<div key={index} className="text-sm">
						{/* Images carousel for each item */}
						<CardCarousel images={item.images} />

						{/* Name and rating */}
						<div className="font-semibold  pt-5 flex justify-between">
							<div>{item.name}</div>
							<div className="rating flex items-center">
								<Star size={15}></Star> {item.rating}
							</div>
						</div>

						{/* Distance */}
						<div className="text-slate-500">
							{item.distance} kilometers away
						</div>

						{/* Cost */}
						<div className="text-slate-500 flex gap-2">
							<span className="text-black font-semibold">{item.cost}</span>
							night
						</div>
					</div>
				);
			})}
		</Card>
	);
};

export default ItemCard;
