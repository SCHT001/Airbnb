import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className=" flex items-center">
      <Link href={"/"}>
        <Image src={"/airbnb.png"} width={100} height={500} alt="Logo"></Image>
      </Link>
    </div>
  );
};

export default Logo;
