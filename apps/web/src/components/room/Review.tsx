"use client";
import { A_review } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormField } from "../ui/form";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Textarea } from "../ui/textarea";

const Review = () => {
  const reviewMutation = useMutation({
    mutationFn: async () => {
      const response = await A_review.post(`/`, {});
      return response.data;
    },
  });

  // review form initialization
  const reviewForm = useForm({
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  useEffect(() => {
    console.log(reviewForm.getValues());
  }, [reviewForm.getValues("review")]);

  return (
    <div className="pb-10 border border-slate-300 p-5">
      <Label htmlFor="reviewTextArea" className="text-lg  font-semibold">
        Write your review
      </Label>
      <FormField
        name="rating"
        control={reviewForm.control}
        render={({ field }) => {
          return (
            <Slider
              onValueChange={(value) => {
                reviewForm.setValue("rating", value[0]);
              }}
              step={1}
              min={0}
              max={5}
              defaultValue={[2]}
              className="mt-5"
            ></Slider>
          );
        }}
      ></FormField>
      <div className="sliderIndex flex justify-between mt-3 font-bold">
        <span className="flex gap-1">
          0 <Star size={20}></Star>
        </span>
        <span className="flex gap-1">
          1 <Star size={20}></Star>
        </span>
        <span className="flex gap-1">
          2 <Star size={20}></Star>
        </span>
        <span className="flex gap-1">
          3 <Star size={20}></Star>
        </span>
        <span className="flex gap-1">
          4 <Star size={20}></Star>
        </span>
        <span className="flex gap-1">
          5 <Star size={20}></Star>
        </span>
      </div>

      <Textarea
        onChange={(element) => {
          reviewForm.setValue("review", element.target.value);
        }}
        id="reviewTextArea"
        className="border border-slate-300 mt-2"
        placeholder="Write your review here..."
      ></Textarea>

      <div className="flex pt-2 justify-end">
        <Button className="w-28">Submit</Button>
      </div>
      {/* </form> */}
      {/* // </Form> */}
    </div>
  );
};

export default Review;
