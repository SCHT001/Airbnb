import { cn } from "@/lib/utils";
import { FC } from "react";

const PhotoGrid: FC<{
	photos: {
		src: string;
	}[];
}> = ({ photos }) => {
	// slice the photos array to only show the first 5 photos
	const slicedPhotos = photos.slice(0, 5);

	return (
		<div className="grid grid-cols-4 gap-2">
			{slicedPhotos.map((photo, i) => (
				<div key={i} className={cn(i === 0 ? "col-span-2 row-span-2" : "")}>
					<img src={photo.src} className="rounded-xl w-full h-full" alt="" />
				</div>
			))}
		</div>
	);
};

export default PhotoGrid;
