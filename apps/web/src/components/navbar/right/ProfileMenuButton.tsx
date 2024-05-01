"use client";
import SignInDialog from "@/components/signIn/SignInDialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { user } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { getCookie, setCookie } from "cookies-next";
import {
  Gift,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProfileMenuButton = () => {
  // query user data
  const getUserData = async () => {
    const userId = getCookie("airbnb_userId");
    const response = await user.get(`/user/${userId}`);
    return response.data;
  };

  const userDataQuery = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
  });
  userDataQuery.isSuccess && console.log(userDataQuery.data);

  const router = useRouter();
  const logOut = () => {
    // setCookie("token", "");
    setCookie("airbnb_userId", "");
    toast.success("Logged out");
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return (
    <div className="border border-slate-300 rounded-full flex p-1 items-center justify-between pl-2 gap-3 ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-3">
            <Menu height={20} width={20}></Menu>
            <Avatar>
              {userDataQuery.isSuccess && getCookie("airbnb_userId") ? (
                <AvatarImage
                  src={userDataQuery.data.photo}
                  height={30}
                  width={30}
                  className="rounded-full border border-slate-300"
                ></AvatarImage>
              ) : (
                <AvatarImage
                  src={"/user_default.png"}
                  height={30}
                  width={30}
                  className="rounded-full border border-slate-300"
                ></AvatarImage>
              )}
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="mt-2 z-50 border-none bg-transparent shadow-none"
        >
          <Card className="w-56 shadow-lg flex flex-col">
            <SignInDialog></SignInDialog>

            <Separator orientation="horizontal"></Separator>

            <DropdownMenuItem className="h-10 pl-5">
              <Link href={"/"} className="flex gap-2 items-center">
                <Gift size={15}></Gift> Gift cards
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="h-10 pl-5">
              <Link href={"/"} className="flex gap-2 items-center">
                <Home size={15}></Home> Airbnb you home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="h-10 pl-5">
              <Link href={"/"} className="flex gap-2 items-center">
                <HelpCircle size={15}></HelpCircle>
                Help Center
              </Link>
            </DropdownMenuItem>

            {/* {settings if logged in} */}

            {getCookie("airbnb_userId") && (
              <>
                <Separator orientation="horizontal"></Separator>

                <DropdownMenuItem className="h-10 pl-5 ">
                  <Link href={"/"} className="flex gap-2 items-center w-full">
                    <User size={15}></User>

                    <span>Account</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="h-10 pl-5">
                  <Link href={"/"} className="flex gap-2 items-center w-full">
                    <Settings size={15}></Settings>
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="h-10 pl-5 ">
                  <Link
                    href={"/"}
                    onClick={logOut}
                    className="flex gap-2 items-center w-full"
                  >
                    <LogOut size={15}></LogOut> <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </>
            )}
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
  // }
};

export default ProfileMenuButton;
