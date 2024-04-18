"use client";
import ItemCard from "@/components/dashboard/ItemCard";
import FilterNavbar from "@/components/filterNavigation/FilterNavbar";
import { useEffect, useState } from "react";

export default function Home() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return <>Loading...</>;
	}
	return (
		<div>
			<div>
				<FilterNavbar></FilterNavbar>
				<ItemCard></ItemCard>
			</div>
		</div>
	);
}
