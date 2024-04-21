import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const accommodations = [
	"House",
	"Apartment",
	"Barn",
	"Boat",
	"Cabin",
	"Camper",
	"Castle",
	"Cave",
	"Container",
	"Cycladic Home",
	"Dammuso",
	"Dome",
	"Earthhome",
	"Farm",
	"Hotel",
	"Guesthouse",
];

const AccommodationType: FC<{
	setAccommodation: any;
}> = ({ setAccommodation }) => {
	const { register, handleSubmit, watch, getValues } = useForm({
		defaultValues: {
			accommodation: "",
		},
	});

	return (
		<div className="flex justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Which of these best describes your place?</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit(() => {
							setAccommodation(getValues("accommodation"));
						})}
					>
						<div className="grid grid-cols-2 gap-4">
							{accommodations.map((accommodation) => (
								<div
									key={accommodation}
									className="flex items-center relative "
								>
									<input
										{...register("accommodation")}
										type="radio"
										name="accommodation"
										id={accommodation}
										className="mr-2 cursor-pointer"
										value={accommodation}
									/>
									<label
										className="radio-labels cursor-pointer absolute top-[50%] left-[40%] transform translate-x-[-50%] translate-y-[-50%]"
										htmlFor={accommodation}
									>
										{accommodation}
									</label>
								</div>
							))}
						</div>
						<Button type="submit">Click</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default AccommodationType;
