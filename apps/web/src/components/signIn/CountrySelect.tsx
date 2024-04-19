"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CommandEmpty, CommandItem } from "cmdk";

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

import countryCodes from "./countryCodes";

const CountrySelect = () => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value
						? countryCodes.find((country) => country.value === value)?.name
						: "Select country..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command className="w-full">
					<CommandInput placeholder="Search country..." />
					<CommandEmpty>No country found.</CommandEmpty>
					<CommandGroup className="w-full">
						<CommandList className="w-full">
							{countryCodes.map((country) => (
								<CommandItem
									className="flex items-center w-full font-medium mb-2 hover:bg-slate-300 cursor-pointer"
									key={country.key}
									value={country.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === country.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{country.name}
								</CommandItem>
							))}
						</CommandList>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default CountrySelect;
