import Image from "next/image";

const Logo = () => {
	return (
		<div className=" flex items-center">
			<Image src={"/airbnb.png"} width={100} height={500} alt="Logo"></Image>
		</div>
	);
};

export default Logo;
