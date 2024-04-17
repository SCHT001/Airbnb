import Logo from "./Logo";
import CenterNavigation from "./center/CenterNavigation";
import Navigation from "./right/Navigation";

const Header = () => {
	return (
		<div className="border justify-between shadow-sm h-20 flex items-center px-32">
			{/* left */}
			<Logo></Logo>

			{/* middle */}
			<CenterNavigation></CenterNavigation>
			{/* right */}
			<div>
				<Navigation></Navigation>
			</div>
		</div>
	);
};

export default Header;
