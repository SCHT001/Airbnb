"use client";
import AccommodationType from "@/components/become-a-host/Accommodation-type";
import Footer from "@/components/become-a-host/Footer";
import Navbar from "@/components/become-a-host/Navbar";
import PlaceType from "@/components/become-a-host/Type-of-place";
import { useEffect, useState } from "react";

const page = () => {
	const [step, setStep] = useState(1);

	const [accommodation, setAccommodation] = useState("");
	useEffect(() => {
		console.log(accommodation);
	}, [accommodation]);

	return (
		<div className="flex flex-col justify-between h-[85vh] px-32">
			<Navbar></Navbar>
			{step === 1 && (
				<AccommodationType
					setAccommodation={setAccommodation}
				></AccommodationType>
			)}
			{step === 2 && <PlaceType></PlaceType>}

			<Footer step={step} setStep={setStep}></Footer>
		</div>
	);
};

export default page;
