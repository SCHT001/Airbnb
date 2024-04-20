import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const accommodations = [
	"house",
	"apartment",
	"barn",
	"bed and breakfast",
	"boat",
	"cabin",
	"camper",
	"castle",
	"cave",
	"container",
	"cycladic home",
	"dammuso",
	"dome",
	"earthhome",
	"farm",
	"hotel",
	"guesthouse",
];

const AccommodationType: FC<{
	setAccommodation: any;
}> = ({ setAccommodation }) => {
	const { register, handleSubmit, watch } = useForm({
		defaultValues: {
			accommodation: "",
		},
	});

	// Watch for changes to the "accommodation" field
	const selectedAccommodation = watch("accommodation");

	return (
		<div className="flex justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Which of these best describes your place?</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit(() => {
							setAccommodation(selectedAccommodation);
						})}
					>
						<div className="grid grid-cols-2 gap-4">
							{accommodations.map((accommodation) => (
								<div key={accommodation} className="flex items-center">
									<input
										{...register("accommodation")}
										type="radio"
										name="accommodation"
										id={accommodation}
										className="mr-2"
										value={accommodation}
									/>
									<label htmlFor={accommodation}>{accommodation}</label>
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
