import { Images } from "lucide-react";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PhotoUpload: FC<{
	field: any;
}> = ({ field }) => {
	return (
		<div className="flex justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle className="text-3xl font-medium">
						Add some photos of your house
					</CardTitle>
					<div className="text-slate-500">
						You will need 5 photos to get started, you make changes and add
						more. later
					</div>
				</CardHeader>
				<CardContent className="relative">
					<Input
						type="file"
						multiple
						id="photosInput"
						className=" h-72 z-100"
					></Input>
					<Label className="absolute gap-5 z-50 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
						<Images size={50}></Images>
						<Label className="text-2xl">Drag your photos here</Label>
						<Label className="text-slate-500">Choose atleast 5 photos</Label>
					</Label>
				</CardContent>
			</Card>
		</div>
	);
};

export default PhotoUpload;
