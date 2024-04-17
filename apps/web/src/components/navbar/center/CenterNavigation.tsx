"use client";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import Link from "next/link";

const CenterNavigation = () => {
	return (
		<div className="flex font-medium gap-5 py-2  items-center  border shadow-md border-slate-300 px-5 rounded-full">
			<Link href={"/"}>
				<div className="h-full">Anywhere</div>
			</Link>

			<Separator orientation="vertical" className="h-[25px]"></Separator>
			<Link href={"/"}>
				<div>Any Week</div>
			</Link>
			<Separator orientation="vertical" className="h-[25px]"></Separator>

			<Link href={"/"} className="flex gap-2 items-center">
				<div className="text-gray-400 ">Add guests</div>
				<div className="bg-red-500 h-8 w-8 flex rounded-full text-white items-center justify-center">
					<Search size={15} strokeWidth={2} absoluteStrokeWidth />
				</div>
			</Link>
		</div>
	);
};

export default CenterNavigation;
