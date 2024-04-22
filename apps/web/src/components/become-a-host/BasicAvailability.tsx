import { FC, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import LabelWithCounter from "./LebelWithCount";

const BasicAvailability: FC<{
	form: any;
}> = ({ form }) => {
	const [guests, setGuests] = useState(0);
	const [bedrooms, setBedrooms] = useState(0);
	const [beds, setBeds] = useState(0);
	const [bathrooms, setBathrooms] = useState(0);

	useEffect(() => {
		form.setValue("availabilities.guests", guests);
		form.setValue("availabilities.bedrooms", bedrooms);
		form.setValue("availabilities.beds", beds);
		form.setValue("availabilities.bathrooms", bathrooms);
	}, [guests, bedrooms, beds, bathrooms]);

	return (
		<div className="flex  justify-center ">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle className="text-3xl">
						Share some basics about your place
					</CardTitle>

					<div className="text-xl text-slate-500">
						You can add more details later like bed types
					</div>
				</CardHeader>
				<CardContent>
					<div className="counters pt-10 gap-5 flex flex-col">
						{/* Counter for guests */}
						<LabelWithCounter
							label="Guests"
							setvalue={setGuests}
						></LabelWithCounter>

						<Separator></Separator>

						{/* counter for bedrooms */}
						<LabelWithCounter
							label="Bedrooms"
							setvalue={setBedrooms}
						></LabelWithCounter>

						{/* Counter for beds */}

						<Separator></Separator>
						<LabelWithCounter
							label="Beds"
							setvalue={setBeds}
						></LabelWithCounter>

						{/* Counter for bathrooms */}
						<Separator></Separator>
						<LabelWithCounter
							label="Bathrooms"
							setvalue={setBathrooms}
						></LabelWithCounter>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default BasicAvailability;
