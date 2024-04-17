"use client";
import { Coffee, Home, Mountain, Telescope } from "lucide-react";
import FilterButtons from "./FilterButtons";
import FilterNavigationItem from "./FilterNavigationItem";

const FilterNavbar = () => {
	const filterOptions = [
		{
			icon: Coffee,
			title: "Breakfast",
		},
		{
			icon: Mountain,
			title: "National Parks",
		},
		{
			icon: Telescope,
			title: "Amazing views",
		},
		{
			icon: Home,
			title: "Cabins",
		},
	];

	return (
		<div className="flex  gap-10 px-32   h-20 items-center justify-between">
			<div className="filter-navigation-items flex gap-10">
				<FilterNavigationItem>
					<Coffee color="gray"></Coffee>
					<div className="text-xs font-semibold text-gray-500">Breakfast</div>
				</FilterNavigationItem>
				<FilterNavigationItem>
					<Mountain color="gray"></Mountain>
					<div className="text-xs font-semibold text-gray-500">
						National Parks
					</div>
				</FilterNavigationItem>
				<FilterNavigationItem>
					<Telescope color="gray"></Telescope>
					<div className="text-xs font-semibold text-gray-500">
						Amazing views
					</div>
				</FilterNavigationItem>
				<FilterNavigationItem>
					<Home color="gray"></Home>
					<div className="text-xs font-semibold text-gray-500">Cabins</div>
				</FilterNavigationItem>
			</div>
			<div className="filter-buttons">
				<FilterButtons></FilterButtons>
			</div>
		</div>
	);
};

export default FilterNavbar;
