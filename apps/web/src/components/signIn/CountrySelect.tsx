"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import countryCodes from "./countryCodes";

const CountrySelect: FC<{ field: any }> = ({ field }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	return (
		<div className="border-x border-t  rounded-t-md">
			{/* <Select {...field}>
				<SelectTrigger className="border-none outline-none">
					<SelectValue
						className="border-none outline-none"
						placeholder="Country code"
					></SelectValue>
				</SelectTrigger>
				<SelectContent>
					{countryCodes.map((country) => {
						return (
							<SelectItem key={country.key} value={country.value}>
								{country.name}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select> */}

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						{value
							? countryCodes.find((country) => country.value === value)?.name
							: "Select country..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command className="z-100">
						<CommandInput placeholder="Search country..." />
						<CommandList className="z-100">
							<CommandEmpty>No Country found.</CommandEmpty>
							<CommandGroup heading="countries">
								{countryCodes.map((country) => {
									return (
										<CommandItem
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
											<span>{country.name}</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CountrySelect;
