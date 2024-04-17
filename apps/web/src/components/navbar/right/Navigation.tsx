import { Globe } from "lucide-react";
import Link from "next/link";
import ProfileMenuButton from "./ProfileMenuButton";

const Navigation = () => {
	return (
		<div className="flex items-center gap-5">
			<Link href={"/"} className="font-medium">
				Airbnb your home
			</Link>

			<Link href={"/"}>
				<Globe></Globe>
			</Link>
			<ProfileMenuButton></ProfileMenuButton>
		</div>
	);
};

export default Navigation;
