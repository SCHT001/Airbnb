import { Avatar } from "../ui/avatar";
import { Label } from "../ui/label";

const RoomDetails = () => {
	return (
		<div className="mt-5">
			<div className="nameDetailsAndReview flex flex-col">
				{/* Room title */}
				<Label className="text-2xl font-medium">
					var(Accomodation) in var(location){" "}
				</Label>
				<Label className="text-slate-700 text-lg">Availabilities</Label>
				<Label className="text-slate-800">Ratings</Label>
			</div>

			<div className="hostedBy">
				<Avatar></Avatar>
			</div>
		</div>
	);
};

export default RoomDetails;
