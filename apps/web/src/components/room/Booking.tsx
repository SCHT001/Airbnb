import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Booking = () => {
	const [range, setRange] = useState<DateRange | undefined>();

	useEffect(() => {
		console.log(range);
	}, [range]);
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					$5000 <span className="text-sm text-slate-500">night</span>{" "}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Calendar
					mode="range"
					selected={range}
					onSelect={setRange}
					className="rounded-md border"
				/>
			</CardContent>
		</Card>
	);
};

export default Booking;
