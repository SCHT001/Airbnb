"use client";
import SignInDialog from "@/components/signIn/SignInDialog";
import { Card } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Menu } from "lucide-react";
import Link from "next/link";

const ProfileMenuButton = () => {
	return (
		<div className="border border-slate-300 rounded-full flex p-1 items-center justify-between pl-2 gap-3 ">
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="flex items-center gap-3">
						<Menu height={20} width={20}></Menu>
						<Avatar>
							<AvatarImage
								src="/user_default.png"
								height={30}
								width={30}
								className="rounded-full border border-slate-300"
							></AvatarImage>
						</Avatar>
					</div>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="end"
					className="mt-2 z-50 border-none bg-transparent shadow-none"
				>
					<Card className="w-56 shadow-lg flex flex-col">
						{/* Dialog box */}
						<SignInDialog></SignInDialog>

						<Separator orientation="horizontal"></Separator>

						<DropdownMenuItem className="h-10 pl-5">
							<Link href={"/"}>Gift cards</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="h-10 pl-5">
							<Link href={"/"}>Airbnb you home</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="h-10 pl-5">
							<Link href={"/"}>Help Center</Link>
						</DropdownMenuItem>
					</Card>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default ProfileMenuButton;
