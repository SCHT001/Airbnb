import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const TitleAndDes: FC<{
	field: any;
}> = ({ field }) => {
	return (
		<div className="flex justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Describe your place to potential guests</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-5">
					<div>
						<Label>Title</Label>
						<Input
							{...field}
							placeholder="Title of your place"
							type="text"
						></Input>
					</div>

					<div>
						<Label>Description</Label>
						<textarea
							{...field}
							className="w-full h-48 border border-gray-300 rounded-md p-4"
							placeholder="Tell guests about your place. You can include details about the space, amenities, and neighborhood."
						></textarea>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default TitleAndDes;
