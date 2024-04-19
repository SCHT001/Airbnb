import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const OTPConfirm: FC<{
	phone: number;
}> = ({ phone }) => {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Confirm your number</DialogTitle>
			</DialogHeader>

			<Separator></Separator>

			<Label className="text-md font-normal">
				Enter the code we have sent to{" "}
				<span className="font-semibold">{phone}</span>
			</Label>

			<InputOTP maxLength={6} className="w-full">
				<InputOTPGroup>
					<InputOTPSlot
						index={0}
						className="border-slate-300 border"
					></InputOTPSlot>
					<InputOTPSlot
						index={1}
						className="border-slate-300 border"
					></InputOTPSlot>
					<InputOTPSlot
						index={2}
						className="border-slate-300 border"
					></InputOTPSlot>
					<InputOTPSlot
						index={3}
						className="border-slate-300 border"
					></InputOTPSlot>
					<InputOTPSlot
						index={4}
						className="border-slate-300 border"
					></InputOTPSlot>
					<InputOTPSlot
						index={5}
						className="border-slate-300 border"
					></InputOTPSlot>
				</InputOTPGroup>
			</InputOTP>

			<Separator></Separator>

			<div className="flex justify-between items-center">
				<Link href={"/"} className="text-sm underline">
					More options
				</Link>
				<Button>Verify</Button>
			</div>
		</DialogContent>
	);
};

export default OTPConfirm;
