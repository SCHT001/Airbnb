import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import SignInDialogContent from "./SignInDialogContent";

const SignInDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="z-100">
				<Button
					variant={"ghost"}
					className="font-semibold w-full h-10  text-start flex justify-start"
				>
					Sign up
				</Button>
				<Button
					variant={"ghost"}
					className="font-semibold w-full h-10  text-start flex justify-start"
				>
					<>Log in</>
				</Button>
			</DialogTrigger>

			{/* sign up Dialog contents */}
			<SignInDialogContent></SignInDialogContent>
		</Dialog>
	);
};

export default SignInDialog;
