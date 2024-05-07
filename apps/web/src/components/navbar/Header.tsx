import Logo from "./Logo";
import CenterNavigation from "./center/CenterNavigation";
import Navigation from "./right/Navigation";

const Header = () => {
  return (
    <div className="border justify-between shadow-sm h-20 flex items-center xl:px-32 px-6 md:px-24">
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
