"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { nameSchema } from "../../../schema";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { Form, FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UserName: FC<{
	setName: any;
	setSteps: any;
}> = ({ setName, setSteps }) => {
	const nameForm = useForm({
		defaultValues: {
			name: "",
		},
		resolver: zodResolver(nameSchema),
	});

	const onSubmit = async () => {
		setName(nameForm.getValues("name"));
		setSteps(4);
		// const response: AxiosResponse = await user.post("/auth/signIn/phone", {
		// 	name: name,
		// 	phone: phone,
		// 	countryCode: countryCode,
		// });
		// if (response.data) {
		// 	setCookie("token", response.data.data.token);
		// 	toast.success("Logged in");
		// 	setTimeout(() => {
		// 		location.reload();
		// 	}, 500);
		// }
	};

	return (
		<div>
			<Form {...nameForm}>
				<form onSubmit={nameForm.handleSubmit(onSubmit)}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-2xl font-medium">
								What should we call you?
							</DialogTitle>
						</DialogHeader>
						<div>
							<FormField
								name="name"
								render={({ field }) => {
									return (
										<div>
											<Label className="text-md font-normal">Name</Label>
											<Input
												className="border border-slate-500"
												{...field}
											></Input>
										</div>
									);
								}}
							></FormField>
							<FormMessage>
								{nameForm.formState.errors.name?.message}
							</FormMessage>
						</div>
						<Button onClick={onSubmit}>Continue</Button>
					</DialogContent>
				</form>
			</Form>
		</div>
	);
};

export default UserName;
