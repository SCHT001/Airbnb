import { Globe } from "lucide-react";
import Link from "next/link";
import ProfileMenuButton from "./ProfileMenuButton";

const Navigation = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href={"/become-a-host"} className="font-medium hidden sm:block">
        Airbnb your home
      </Link>

      <Link href={"/"} className="hidden sm:block">
        <Globe></Globe>
      </Link>
      <ProfileMenuButton></ProfileMenuButton>
    </div>
  );
};

export default Navigation;
