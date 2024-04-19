import { FC } from "react";
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

			<Label className="text-md">Enter the code we have sent to {phone}</Label>
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
		</DialogContent>
	);
};

export default OTPConfirm;
