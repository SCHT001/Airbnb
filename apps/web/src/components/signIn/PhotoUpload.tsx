import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";

const PhotoUpload: FC<{
	setPhoto: any;
	setSteps: any;
}> = ({ setPhoto, setSteps }) => {
	const photoForm = useForm({
		defaultValues: {
			photo: "",
		},
	});

	const submitPhoto = () => {
		setPhoto(photoForm.getValues("photo"));
		setSteps(5);
	};

	return (
		<DialogContent className="flex flex-col items-center">
			<DialogHeader>
				<DialogTitle className="text-center text-2xl">
					Upload your photo
				</DialogTitle>
			</DialogHeader>
			<Form {...photoForm}>
				<form onSubmit={photoForm.handleSubmit(submitPhoto)}>
					<FormField
						name="photo"
						render={({ field }) => {
							return (
								<div className=" flex  flex-col items-center gap-5">
									<img
										src="/user_default.png"
										alt="user_default"
										className="p-2 border-2 h-56 border-slate-400 rounded-full"
									/>
									<Input
										{...field}
										type="file"
										className="border border-primary"
									></Input>
									<Button className="w-full" type="submit">
										Submit
									</Button>
								</div>
							);
						}}
					></FormField>
				</form>
			</Form>
		</DialogContent>
	);
};

export default PhotoUpload;
