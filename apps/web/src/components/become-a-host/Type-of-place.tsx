import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PlaceType = () => {
	return (
		<div className="flex items-center justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>What type of place will guest have?</CardTitle>
				</CardHeader>
				<CardContent>
					<form></form>
				</CardContent>
			</Card>
		</div>
	);
};

export default PlaceType;
