"use client";
import AccommodationType from "@/components/become-a-host/Accommodation-type";
import Footer from "@/components/become-a-host/Footer";
import Navbar from "@/components/become-a-host/Navbar";
import PlaceType from "@/components/become-a-host/Type-of-place";
import { Form, FormField } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
	const [step, setStep] = useState(1);

	const [accommodation, setAccommodation] = useState("");
	useEffect(() => {
		console.log(accommodation);
	}, [accommodation]);

	const becomeHostForm = useForm({
		defaultValues: {
			accommodation: "",
		},
	});

	const onSubmit = () => {
		if (step === 1) {
			setAccommodation(becomeHostForm.getValues("accommodation"));
			setStep(step + 1);
		}
	};

	return (
		<div className="flex flex-col justify-between h-[85vh] px-32">
			<Navbar></Navbar>
			<Form {...becomeHostForm}>
				<form onSubmit={becomeHostForm.handleSubmit(onSubmit)}>
					<div className="pb-28">
						{step === 1 && (
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
						{step === 2 && <PlaceType></PlaceType>}
					</div>
					<Footer step={step} setStep={setStep}></Footer>
				</form>
			</Form>
		</div>
	);
};

export default page;
