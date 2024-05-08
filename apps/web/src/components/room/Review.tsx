import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Review = () => {
  return (
    <div className="pb-10">
      <Label htmlFor="reviewTextArea" className="text-lg  font-semibold">
        Write your review
      </Label>
      <Textarea
        id="reviewTextArea"
        className="border border-slate-300 mt-2"
        placeholder="Write your review here..."
      ></Textarea>
    </div>
  );
};

export default Review;
