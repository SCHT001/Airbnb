"use client";
import AccommodationType from "@/components/become-a-host/Accommodation-type";
import BasicAvailability from "@/components/become-a-host/BasicAvailability";
import Footer from "@/components/become-a-host/Footer";
import Navbar from "@/components/become-a-host/Navbar";
import PhotoUpload from "@/components/become-a-host/PhotoUpload";
import PlaceType from "@/components/become-a-host/Type-of-place";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { host, hostImage } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { T_Listing } from "../../../types";

const page = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const becomeHostForm = useForm({
    defaultValues: {
      accommodation: "",
      placeType: "",
      availabilities: {
        guests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
      },
      photos: [],
      title: "",
      description: "",
      price: 0,
    },
  });

  // Queries

  const submitMutation = async (data: T_Listing) => {
    const response = await host.post("/listings", data);
    return response.data;
  };

  const submitPhotosMutation = async (id: string) => {
    const formData = new FormData();
    formData.append("listing_id", id);
    setTimeout(async () => {
      for (let i = 0; i < 5; i++) {
        formData.append("photo", becomeHostForm.getValues("photos")[i]);
      }
      console.log(becomeHostForm.getValues("photos")[0]);
      const response = await hostImage.post("/listings/photos", formData);
      console.log(response);
    }, 2000);
  };

  const photosMutation = useMutation({
    mutationFn: submitPhotosMutation,
    onSuccess: () => {
      toast.success("Listing created successfully");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
  });

  const becomeHostMutation = useMutation({
    mutationFn: submitMutation,
    onSuccess(data, variables, context) {
      photosMutation.mutate(data.data.id);
    },
  });

  // formdata for photo upload

  const onSubmit = () => {
    if (step === 1) {
      //   setAccommodation(becomeHostForm.getValues("accommodation"));
      return setStep(step + 1);
    }

    if (step === 2) {
      //   setPlaceType(becomeHostForm.getValues("placeType"));
      return setStep(step + 1);
    }

    if (step === 3) {
      //   setAvailabilities(becomeHostForm.getValues("availabilities"));
      return setStep(step + 1);
    }
    if (step === 4) {
      // console.log(becomeHostForm.getValues("photos"));
      return setStep(step + 1);
    }
    if (step === 5) {
      // console.log(becomeHostForm.getValues("photos"));
      const hostId: string = getCookie("airbnb_userId")!;

      const data = {
        host_id: hostId,
        accommodation: becomeHostForm.getValues("accommodation"),
        place_type: becomeHostForm.getValues("placeType"),
        capacity: becomeHostForm.getValues("availabilities.guests"),
        bedrooms: becomeHostForm.getValues("availabilities.bedrooms"),
        bathrooms: becomeHostForm.getValues("availabilities.bathrooms"),
        beds: becomeHostForm.getValues("availabilities.beds"),
        title: becomeHostForm.getValues("title"),
        description: becomeHostForm.getValues("description"),
        price: becomeHostForm.getValues("price"),
        location: "kathmandu",
      };
      becomeHostMutation.mutate(data);
      // console.log(becomeHostForm.getValues());
    }
  };

  return (
    <div className="flex flex-col gap-10 h-[85vh] px-32">
      <Navbar></Navbar>
      <Form {...becomeHostForm}>
        <form onSubmit={becomeHostForm.handleSubmit(onSubmit)}>
          <div className="pb-28">
            {/* step 1 for accommodation type */}
            {step == 1 && (
              <FormField
                name="accommodation"
                render={({ field }) => {
                  return <AccommodationType field={field}></AccommodationType>;
                }}
              ></FormField>
            )}

            {/* step 2 for place type */}
            {step == 2 && (
              <FormField
                name="placeType"
                render={({ field }) => {
                  return <PlaceType field={field}></PlaceType>;
                }}
              ></FormField>
            )}

            {/*  step 3 for basic availability*/}

            {step == 3 && (
              <FormField
                name="availabilities"
                render={({ field }) => {
                  return (
                    <BasicAvailability
                      form={becomeHostForm}
                    ></BasicAvailability>
                  );
                }}
              ></FormField>
            )}

            {/* step 4 for place description */}

            {step == 4 && (
              <div className="flex justify-center">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      Describe your place to potential guests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    {/* field for title */}
                    <FormField
                      name="title"
                      render={({ field }) => {
                        return (
                          <div className="flex justify-center">
                            <div className="w-full">
                              <Label>Title</Label>
                              <Input
                                required
                                {...field}
                                placeholder="Title of your place"
                                type="text"
                                className="w-full"
                              ></Input>
                            </div>
                          </div>
                        );
                      }}
                    ></FormField>

                    {/* field for description */}
                    <FormField
                      name="description"
                      render={({ field }) => {
                        return (
                          <div>
                            <Label>Description</Label>
                            <textarea
                              required
                              {...field}
                              className="w-full h-48 border border-gray-300 rounded-md p-4"
                              placeholder="Tell guests about your place. You can include details about the space, amenities, and neighborhood."
                            ></textarea>
                          </div>
                        );
                      }}
                    ></FormField>

                    {/* field for price */}

                    <FormField
                      name="price"
                      render={({ field }) => {
                        return (
                          <div>
                            <Label>Price</Label>
                            <Input
                              required
                              {...field}
                              type="number"
                              placeholder="Price per night"
                            ></Input>
                          </div>
                        );
                      }}
                    ></FormField>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* step 5 for photo upload */}
            {step == 5 && (
              <FormField
                name="photos"
                render={({ field }) => {
                  return <PhotoUpload form={becomeHostForm}></PhotoUpload>;
                }}
              ></FormField>
            )}
          </div>
          <Footer step={step} setStep={setStep}></Footer>
        </form>
      </Form>
    </div>
  );
};

export default page;
