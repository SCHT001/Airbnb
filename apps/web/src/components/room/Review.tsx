"use client";
import { A_review } from "@/lib/axios";
import { T_ReviewData, T_responseReviews } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { Star } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FormField } from "../ui/form";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import { Slider } from "../ui/slider";
import { Textarea } from "../ui/textarea";

const Review: FC<{
  listingId: string | string[];
}> = ({ listingId }) => {
  const userId = getCookie("airbnb_userId");
  // add review mutation
  const reviewMutation = useMutation({
    mutationFn: async () => {
      const response = await A_review.post(`/`, {
        userId: userId,
        listingId: listingId,
        rating: reviewForm.getValues("rating"),
        comment: reviewForm.getValues("review"),
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Review added successfully");
    },
    onError: (error) => {
      toast.error("Review already exists");
    },
  });

  // review form initialization
  const reviewForm = useForm({
    defaultValues: {
      rating: 2,
      review: "",
    },
  });

  // get revies for the listing

  const reviewsQuery = useQuery({
    queryKey: ["reviews", listingId],
    queryFn: async () => {
      const response = await A_review.get(`/${listingId}`);
      const data: T_responseReviews = response.data;
      return data;
    },
  });

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
        <Button
          className="w-28"
          onClick={() => {
            reviewMutation.mutate();
          }}
        >
          Submit
        </Button>
      </div>
      <div>
        <div className="font-medium text-lg mt-5">Reviews</div>
        {reviewsQuery.isLoading && (
          <div className="flex flex-col gap-5 mt-5">
            <Skeleton className="h-20"></Skeleton>
            <Skeleton className="h-20"></Skeleton>
            <Skeleton className="h-20"></Skeleton>
            <Skeleton className="h-20"></Skeleton>
          </div>
        )}
        {reviewsQuery.data?.data.map((review: T_ReviewData, index) => {
          return (
            <div
              key={index}
              className="border flex justify-between border-slate-300 p-2 rounded-md"
            >
              <Avatar>
                <AvatarImage src={review.user.photo} alt="User"></AvatarImage>
              </Avatar>

              <div className="description flex flex-col w-full pl-2  justify-between">
                <div className="flex w-full justify-between">
                  <div className="name font-semibold">{review.user.name}</div>
                  <div className="ratings flex gap-1">
                    {review.rating}
                    <Star size={20}></Star>
                  </div>
                </div>
                <div className="comment text-slate-500">{review.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
