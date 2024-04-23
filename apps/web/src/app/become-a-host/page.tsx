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
import { host } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
	const [step, setStep] = useState(1);

	const [accommodation, setAccommodation] = useState("");

	const [placeType, setPlaceType] = useState("");

	const [availabilities, setAvailabilities] = useState({
		guests: 0,
		bedrooms: 0,
		beds: 0,
		bathrooms: 0,
	});

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
			photos: [""],
			title: "",
			description: "",
			price: 0,
		},
	});

	// Queries

	const queryClient = useQueryClient();

	const submitMutation = async (data: any) => {
		const response = await host.post("/listings", data);
	};

	const becomeHostMutation = useMutation({
		mutationFn: submitMutation,
		onSuccess: () => {
			console.log("success");
		},
	});

	const onSubmit = () => {
		if (step === 1) {
			setAccommodation(becomeHostForm.getValues("accommodation"));
			return setStep(step + 1);
		}

		if (step === 2) {
			setPlaceType(becomeHostForm.getValues("placeType"));
			return setStep(step + 1);
		}

		if (step === 3) {
			setAvailabilities(becomeHostForm.getValues("availabilities"));
			return setStep(step + 1);
		}
		if (step === 4) {
			return setStep(step + 1);
		}
		if (step === 5) {
			const data = {
				host_id: "5",
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
			console.log(becomeHostForm.getValues());
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
									return (
										<AccommodationType
											field={field}
											setAccommodation={setAccommodation}
										></AccommodationType>
									);
								}}
							></FormField>
						)}

						{/* step 2 for place type */}
						{step == 2 && (
							<FormField
								name="placeType"
								render={({ field }) => {
									return (
										<PlaceType
											setPlaceType={setPlaceType}
											field={field}
										></PlaceType>
									);
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
									return <PhotoUpload field={field}></PhotoUpload>;
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
