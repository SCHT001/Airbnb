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
const Page1 = () => {
	return (
		<div className="flex justify-center ">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Which of these best describes your place?</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 gap-4">
						{accommodations.map((accommodation) => (
							<div key={accommodation} className="flex items-center">
								<input
									type="radio"
									name="accommodation"
									id={accommodation}
									className="mr-2"
								/>
								<label htmlFor={accommodation}>{accommodation}</label>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Page1;
