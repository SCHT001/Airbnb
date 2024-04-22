import { FC } from "react";
import { Card } from "../ui/card";

const PhotoUpload: FC<{
	field: any;
}> = ({ field }) => {
	return (
		<div>
			<Card className="border-none shadow-none"></Card>
		</div>
	);
};

export default PhotoUpload;
