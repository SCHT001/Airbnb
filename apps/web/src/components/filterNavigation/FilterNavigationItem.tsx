"use client";
import { ReactNode } from "react";

const FilterNavigationItem: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<div>
			<div className="w-fit text-black flex flex-col justify-center items-center  border-b-2 border-b-transparent hover:border-b-gray-200 transition-all ">
				{children}
			</div>
		</div>
	);
};

export default FilterNavigationItem;
