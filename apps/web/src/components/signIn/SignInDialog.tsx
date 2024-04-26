import { user } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogTrigger } from "../ui/dialog";
import OTPConfirm from "./OTPConfirm";
import PhotoUpload from "./PhotoUpload";
import SignInDialogContent from "./SignInDialogContent";
import UserName from "./UserName";

const SignInDialog = () => {
	const [steps, setSteps] = useState(1);

	const [phone, setPhone] = useState(0);
	const [countryCode, setCountryCode] = useState(0);
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");

	if (steps === 5) {
		(async () => {
			const response: AxiosResponse = await user.post("/auth/signIn/phone", {
				name: name,
				phone: phone.toString(),
				countryCode: countryCode.toString(),
				// photo: photo,
			});
			if (response.data) {
				setCookie("token", response.data.data.token);
				toast.success("Logged in");
				setTimeout(() => {
					location.reload();
				}, 500);
				setCookie("airbnb_userId", response.data.data.userId);
			}
		})();
	}

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
					<UserName setSteps={setSteps} setName={setName}></UserName>
				)}
				{steps === 4 && (
					<PhotoUpload setPhoto={setPhoto} setSteps={setSteps}></PhotoUpload>
				)}
			</Dialog>
		);
	}
};

export default SignInDialog;
