import { FC } from "react";
import { Button } from "../ui/button";

const Footer: FC<{
	step: number;
	setStep: any;
}> = ({ step, setStep }) => {
	return (
		<div className="flex items-center justify-between">
			<Button
				variant={"outline"}
				className="font-xl px-10 py-7 border-slate-300"
				onClick={() => {
					if (step > 1) setStep(step - 1);
				}}
			>
				Back
			</Button>
			<Button
				className="px-10 py-7"
				onClick={() => {
					if (step > 0) setStep(step + 1);
				}}
			>
				Next
			</Button>
		</div>
	);
};

export default Footer;
