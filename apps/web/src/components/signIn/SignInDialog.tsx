import { getCookie } from "cookies-next";
import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import OTPConfirm from "./OTPConfirm";
import SignInDialogContent from "./SignInDialogContent";
import UserName from "./UserName";

const SignInDialog = () => {
	const [steps, setSteps] = useState(1);

	const [phone, setPhone] = useState(0);
	const [countryCode, setCountryCode] = useState(0);
	const [name, setName] = useState("");

	if (!getCookie("token")) {
		return (
			<Dialog open={getCookie("token") ? false : undefined}>
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
				{steps === 1 && (
					<SignInDialogContent
						setPhone={setPhone}
						setCountryCode={setCountryCode}
						steps={steps}
						setSteps={setSteps}
					></SignInDialogContent>
				)}
				{steps === 2 && (
					<OTPConfirm
						setSteps={setSteps}
						phone={phone}
						countryCode={countryCode}
					></OTPConfirm>
				)}
				{steps === 3 && (
					<UserName
						setName={setName}
						countryCode={countryCode}
						phone={phone}
						name={name}
					></UserName>
				)}
			</Dialog>
		);
	}
};

export default SignInDialog;
