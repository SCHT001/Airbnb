import { cn } from "@/lib/utils";
import { FC } from "react";

const PhotoGrid: FC<{
	photos: {
		id: string;
		listingId: string;
		url: string;
	}[];
}> = ({ photos }) => {
	// slice the photos array to only show the first 5 photos
	// const slicedPhotos = photos.slice(0, 5);
	console.log(photos);
	return (
		<div className="grid grid-cols-4 gap-2">
			{photos.map((photo, i) => (
				<div key={i} className={cn(i === 0 ? "col-span-2 row-span-2" : "")}>
					<img
						src={photo.url}
						className={(cn(i === 0 ? "h-96" : ""), "rounded-xl w-full h-56")}
						alt=""
					/>
				</div>
			))}
		</div>
	);
};

export default PhotoGrid;
