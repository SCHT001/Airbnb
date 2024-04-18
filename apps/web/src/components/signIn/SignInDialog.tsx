import { Dialog, DialogTrigger } from "../ui/dialog";
import SignInDialogContent from "./SignInDialogContent";

const SignInDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="z-100">
				<div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
					Sign up
				</div>
				<div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
					<>Log in</>
				</div>
			</DialogTrigger>

			{/* sign up Dialog contents */}
			<SignInDialogContent></SignInDialogContent>
		</Dialog>
	);
};

export default SignInDialog;
