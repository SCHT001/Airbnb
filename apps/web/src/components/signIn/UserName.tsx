import { DialogTitle } from "@radix-ui/react-dialog";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UserName: FC<{
	setName: any;
	phone: number;
	countryCode: number;
	name: string;
}> = ({ setName, countryCode, phone }) => {
	const nameForm = useForm({
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = () => {
		setName(nameForm.getValues("name"));
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
						</div>
						<Button type="submit">Continue</Button>
					</DialogContent>
				</form>
			</Form>
		</div>
	);
};

export default UserName;
