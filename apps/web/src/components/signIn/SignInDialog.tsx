import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Form } from "../ui/form";
import OTPConfirm from "./OTPConfirm";
import SignInDialogContent from "./SignInDialogContent";
import UserName from "./UserName";

const SignInDialog = () => {
	const [submitted, setSubmitted] = useState(false);
	const [steps, setSteps] = useState(1);

	const [phone, setPhone] = useState(0);
	const [countryCode, setCountryCode] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		setSubmitted(false);
	}, []);

	const loginForm = useForm({
		defaultValues: {
			country: "",
			phone: "",
			name: "",
		},
	});

	const onSubmit = () => {
		console.log(phone);
		console.log(countryCode);
	};

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
			<Form {...loginForm}>
				<form onSubmit={loginForm.handleSubmit(onSubmit)}>
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
					{steps === 3 && <UserName></UserName>}
				</form>
			</Form>
		</Dialog>
	);
};

export default SignInDialog;
