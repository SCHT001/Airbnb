import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PlaceType = () => {
	return (
		<div className="flex items-center justify-center">
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>What type of place will guest have?</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-3">
							<div className="flex items-center pl-20   relative">
								<input
									type="radio"
									id="entire-place"
									name="place-type"
									value="entire-place"
								/>
								<label
									className="absolute left-[35%] top=[50%] transform "
									htmlFor="entire-place"
								>
									Entire place
								</label>
							</div>
							<div className="flex items-center pl-20  relative">
								<input
									type="radio"
									id="private-room"
									name="place-type"
									value="private-room"
								/>
								<label
									className="absolute left-[35%] top=[50%] transform"
									htmlFor="private-room"
								>
									Private room
								</label>
							</div>
							<div className="flex items-center pl-20 relative">
								<input
									type="radio"
									id="shared-room"
									name="place-type"
									value="shared-room"
								/>
								<label
									className="absolute left-[35%] top=[50%] transform"
									htmlFor="shared-room"
								>
									Shared room
								</label>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default PlaceType;
