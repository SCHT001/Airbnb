import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="flex gap-5 justify-end mt-5 px-32">
			<Button variant={"outline"} className="font-medium border-slate-300">
				Questions?
			</Button>
			<Button variant={"outline"} className="font-medium border-slate-300">
				Save and exit
			</Button>
		</div>
	);
};

export default Navbar;
