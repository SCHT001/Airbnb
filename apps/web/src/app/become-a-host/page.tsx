"use client";
import Footer from "@/components/become-a-host/Footer";
import Navbar from "@/components/become-a-host/Navbar";
import Page1 from "@/components/become-a-host/Page1";
import { useState } from "react";

const page = () => {
	const [step, setStep] = useState(1);
	return (
		<div className="flex flex-col justify-between h-[85vh] px-32">
			<Navbar></Navbar>
			{step === 1 && <Page1></Page1>}

			<Footer step={step} setStep={setStep}></Footer>
		</div>
	);
};

export default page;
