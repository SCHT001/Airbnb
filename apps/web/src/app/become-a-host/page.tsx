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
import { T_Listing } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { listingInputSchema } from "../../../schema";

const page = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // initialize form
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
    resolver: zodResolver(listingInputSchema),
  });

  // Queries

  const submitMutation = async (data: T_Listing) => {
    const response = await host.post("/listings", data);
    return response.data;
  };

  const submitPhotosMutation = async (id: string) => {
    const formData = new FormData();
    formData.append("listing_id", id);

    console.log(becomeHostForm.getValues("photos")[0]);
    setTimeout(async () => {
      for (let i = 0; i < 5; i++) {
        console.log(becomeHostForm.getValues("photos")[i]);
        formData.append("photo", becomeHostForm.getValues("photos")[i]);
      }
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

  const onSubmit = () => {
    // console.log(becomeHostForm.getValues("photos"));
    const hostId: string = getCookie("airbnb_userId")!;

    const data: T_Listing = {
      title: becomeHostForm.getValues("title"),
      description: becomeHostForm.getValues("description"),
      price: Number(becomeHostForm.getValues("price")),
      host_id: hostId,
      accommodation: becomeHostForm.getValues("accommodation"),
      place_type: becomeHostForm.getValues("placeType"),
      capacity: becomeHostForm.getValues("availabilities.guests"),
      bedrooms: becomeHostForm.getValues("availabilities.bedrooms"),
      bathrooms: becomeHostForm.getValues("availabilities.bathrooms"),
      beds: becomeHostForm.getValues("availabilities.beds"),
      location: "kathmandu",
    };
    becomeHostMutation.mutate(data);
  };

  // submit form if step 6

  const accommodationForm = useForm({
    defaultValues: {
      accommodation: "",
    },
    resolver: zodResolver(
      z.object({
        accommodation: z.string().min(1, "Please select an option"),
      })
    ),
  });

  const placeTypeForm = useForm({
    defaultValues: {
      placeType: "",
    },
    resolver: zodResolver(
      z.object({
        placeType: z.string().min(1, "Please select an option"),
      })
    ),
  });

  const basicAvailabilityForm = useForm({
    defaultValues: {
      availabilities: {
        guests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
      },
    },
    resolver: zodResolver(
      z.object({
        availabilities: z.object({
          guests: z.number().min(1, "Guests must be at least 1"),
          bedrooms: z.number().min(1, "Bedrooms must be at least 1"),
          beds: z.number().min(1, "Beds must be at least 1"),
          bathrooms: z.number().min(1, "Bathrooms must be at least 1"),
        }),
      })
    ),
  });

  const photoUploadForm = useForm({
    defaultValues: {
      photos: {},
    },
  });

  const placeDescriptionForm = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
    resolver: zodResolver(
      z.object({
        title: z.string().min(1, "Title must be at least 1 character"),
        description: z
          .string()
          .min(1, "Description must be at least 1 character"),
        price: z.string().min(1, "Price must be at least 1"),
      })
    ),
  });

  useEffect(() => {
    console.log(becomeHostForm.getValues());
  }, [becomeHostForm.getValues()]);

  return (
    <div className="flex flex-col gap-10 h-[85vh] px-32">
      <Navbar></Navbar>

      {/* accomodation type  */}
      {step === 1 && (
        <Form {...accommodationForm}>
          <form
            onSubmit={accommodationForm.handleSubmit(() => {
              becomeHostForm.setValue(
                "accommodation",
                accommodationForm.getValues("accommodation")
              );
              setStep(step + 1);
            })}
          >
            <FormField
              name="accommodation"
              render={({ field }) => {
                return <AccommodationType field={field}></AccommodationType>;
              }}
            ></FormField>
            {accommodationForm.formState.errors.accommodation &&
              toast.error(
                accommodationForm.formState.errors.accommodation.message,
                {
                  action: {
                    label: "X",
                    onClick: () => {},
                  },
                }
              )}
            <Footer step={step} setStep={setStep}></Footer>
          </form>
        </Form>
      )}

      {/* Place type */}
      {step === 2 && (
        <Form {...placeTypeForm}>
          <form
            onSubmit={placeTypeForm.handleSubmit(() => {
              becomeHostForm.setValue(
                "placeType",
                placeTypeForm.getValues("placeType")
              );
              setStep(step + 1);
            })}
          >
            <FormField
              name="placeType"
              render={({ field }) => {
                return <PlaceType field={field}></PlaceType>;
              }}
            ></FormField>
            <Footer step={step} setStep={setStep}></Footer>
          </form>
        </Form>
      )}

      {/* Basic availability */}
      {step === 3 && (
        <Form {...basicAvailabilityForm}>
          <form
            onSubmit={basicAvailabilityForm.handleSubmit(() => {
              becomeHostForm.setValue(
                "availabilities",
                basicAvailabilityForm.getValues("availabilities")
              );
              setStep(step + 1);
            })}
          >
            <FormField
              name="availabilities"
              render={({ field }) => {
                return (
                  <BasicAvailability
                    form={basicAvailabilityForm}
                  ></BasicAvailability>
                );
              }}
            ></FormField>
            <Footer step={step} setStep={setStep}></Footer>
          </form>
        </Form>
      )}

      {/* Photo upload */}
      {step === 4 && (
        <Form {...photoUploadForm}>
          <form
            onSubmit={photoUploadForm.handleSubmit(() => {
              setStep(step + 1);
            })}
          >
            <FormField
              name="photos"
              render={({ field }) => {
                return (
                  <PhotoUpload
                    form={photoUploadForm}
                    mainForm={becomeHostForm}
                  ></PhotoUpload>
                );
              }}
            ></FormField>
            <Footer step={step} setStep={setStep}></Footer>
          </form>
        </Form>
      )}

      {/* Place description */}
      {step === 5 && (
        <Form {...placeDescriptionForm}>
          <form
            onSubmit={placeDescriptionForm.handleSubmit(() => {
              becomeHostForm.setValue(
                "title",
                placeDescriptionForm.getValues("title")
              );
              becomeHostForm.setValue(
                "description",
                placeDescriptionForm.getValues("description")
              );
              becomeHostForm.setValue(
                "price",
                placeDescriptionForm.getValues("price")
              );
              onSubmit();
            })}
          >
            <div className="flex justify-center">
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-3xl font-medium">
                    Describe your place
                  </CardTitle>
                  <div className="text-slate-500">
                    Make sure to provide accurate information
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-5">
                    <Label className="text-xl">Title</Label>
                    <Input
                      type="text"
                      {...placeDescriptionForm.register("title")}
                      className="border border-slate-300"
                    ></Input>
                    <Label className="text-xl">Description</Label>
                    <Input
                      type="text"
                      {...placeDescriptionForm.register("description")}
                      className="border border-slate-300"
                    ></Input>
                    <Label className="text-xl">Price</Label>
                    <Input
                      type="number"
                      {...placeDescriptionForm.register("price")}
                      className="border border-slate-300"
                    ></Input>
                  </div>
                </CardContent>
                <Footer step={step} setStep={setStep}></Footer>
              </Card>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default page;
