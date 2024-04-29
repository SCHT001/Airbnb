import { FC } from "react";
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
  field: any;
}> = ({ field }) => {
  return (
    <div className="flex justify-center">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Which of these best describes your place?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {accommodations.map((accommodation) => (
              <div key={accommodation} className="flex items-center relative ">
                <input
                  {...field}
                  type="radio"
                  id={accommodation}
                  className="mr-2 "
                  value={accommodation}
                />
                <label className="radio-labels " htmlFor={accommodation}>
                  {accommodation}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccommodationType;
