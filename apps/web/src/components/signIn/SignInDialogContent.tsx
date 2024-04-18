"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { CountrySelect } from "./CountrySelect";

const SignInDialogContent = () => {
	const signWithGoogle = async () => {
		const result = await signIn("google", {
			callbackUrl: "http://localhost:3000/",
		});
	};

	// Initialize form
	const loginForm = useForm({
		defaultValues: {
			country: "",
			phone: "",
		},
	});

	const onSubmit = () => {
		console.log(loginForm.getValues);
	};

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className="flex justify-center">
					Log in or sign up
				</DialogTitle>
			</DialogHeader>

			<Separator className="bg-slate-300"></Separator>
			<div className="flex gap-5 flex-col">
				<Label className="text-2xl  text-black">Welcome to Airbnb</Label>

				{/* Country select and number input */}
				<Form {...loginForm}>
					<form onSubmit={loginForm.handleSubmit(onSubmit)}>
						{/* Form field for country select */}
						<FormField
							name="countryCode"
							render={({ field }) => {
								return <CountrySelect></CountrySelect>;
							}}
						></FormField>
						<FormField
							name="phone"
							render={({ field }) => {
								return (
									<>
										<Input
											{...field}
											placeholder="Phone number"
											className=" rounded-t-none  text-black"
											type="number"
										></Input>
									</>
								);
							}}
						></FormField>
						{/* Label */} <br />
						<Label className="text-sm pb-10 text-black">
							We will call or text you to confirm your number. Standard message
							and data rates apply. &nbsp;
							<Link href={"/"} className="underline">
								Privacy policy
							</Link>
						</Label>
						{/* Submit button */}
						<Button
							type="submit"
							className="bg-red-500 hover:bg-red-600 text-white w-full h-10 rounded-md"
						>
							Continue
						</Button>
					</form>
				</Form>

				{/* or separator */}
				<div className="flex gap-2 items-center justify-between">
					<div className="w-full h-[1px] bg-black"></div>

					<div>or</div>

					<div className="w-full h-[1px] bg-black"></div>
				</div>
				{/* Sign up with providers */}
				<div className="provider-buttons flex gap-5 flex-col">
					{/* google */}
					<Button
						onClick={signWithGoogle}
						variant={"outline"}
						className="text-black border-black w-full flex justify-between items-center"
					>
						<Image
							alt="Google"
							src={"/google.png"}
							width={20}
							height={20}
							className="place-self-start"
						></Image>
						<div className="self-center w-full">Continue with Google</div>
					</Button>

					{/* Facebook */}
					<Button
						variant={"outline"}
						className="text-black border-black w-full flex justify-between items-center"
					>
						<Image
							alt="Facebook"
							src={"/facebook.png"}
							width={20}
							height={20}
							className="place-self-start"
						></Image>
						<div className="self-center w-full">Continue with Facebook</div>
					</Button>

					{/* Apple */}
					<Button
						variant={"outline"}
						className="text-black border-black w-full flex justify-between items-center"
					>
						<Image
							alt="Apple"
							src={"/apple.png"}
							width={20}
							height={20}
							className="place-self-start"
						></Image>
						<div className="self-center w-full">Continue with Apple</div>
					</Button>

					{/* Mail */}

					<Button
						variant={"outline"}
						className="text-black border-black w-full flex justify-between items-center"
					>
						<Image
							alt="Mail"
							src={"/mail.png"}
							width={20}
							height={20}
							className="place-self-start"
						></Image>
						<div className="self-center w-full">Continue with Email</div>
					</Button>
				</div>
			</div>
		</DialogContent>
	);
};

export default SignInDialogContent;
