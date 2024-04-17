"use client";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const FilterButtons = () => {
	return (
		<div className="flex gap-3 text-sm">
			<Button variant={"outline"} className="flex gap-2 py-6 ">
				<SlidersHorizontal size={15}></SlidersHorizontal>
				Filters
			</Button>

			<div className="border border-slate-200 rounded-md total-before-taxes flex items-center px-2 font-medium gap-2">
				<span>Display total before taxes</span>
				<Switch></Switch>
			</div>
		</div>
	);
};

export default FilterButtons;
