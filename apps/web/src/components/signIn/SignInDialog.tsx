import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import OTPConfirm from "./OTPConfirm";
import SignInDialogContent from "./SignInDialogContent";

const SignInDialog = () => {
	const [submitted, setSubmitted] = useState(false);
	const [phone, setPhone] = useState<number>(0);

	useEffect(() => {
		setSubmitted(false);
	}, []);

	return (
		<Dialog
			onOpenChange={() => {
				setSubmitted(false);
			}}
		>
			<DialogTrigger className="z-100">
				<div>
					<div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
						Sign up
					</div>
					<div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
						<>Log in</>
					</div>
				</div>
			</DialogTrigger>

			{!submitted ? (
				<SignInDialogContent
					setSubmitted={setSubmitted}
					setPhone={setPhone}
				></SignInDialogContent>
			) : (
				<OTPConfirm phone={phone}></OTPConfirm>
			)}
		</Dialog>
	);
};

export default SignInDialog;
