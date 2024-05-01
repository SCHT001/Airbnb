import { hostImage, user } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import OTPConfirm from "./OTPConfirm";
import PhotoUpload from "./PhotoUpload";
import SignInDialogContent from "./SignInDialogContent";
import UserName from "./UserName";

const SignInDialog = () => {
  const [steps, setSteps] = useState(1);

  const loginForm = useForm({
    defaultValues: {
      phone: "",
      countryCode: "",
      name: "",
    },
  });

  const photoForm = useForm({
    defaultValues: {
      photo: "",
    },
  });

  const signIn = async (data: {
    name: string;
    phone: string;
    countryCode: string;
  }) => {
    toast.loading("Siging you in. Please wait");
    const response: AxiosResponse = await user.post("/auth/signIn/phone", data);
    if (response.data) {
      // setCookie("token", response.data.data.token);
      setCookie("airbnb_userId", response.data.data.userId);
    }
    return response.data;
  };

  const uploadUserPhoto = async (data: { userId: any; photo: any }) => {
    const formData = new FormData();
    formData.append("userId", data.userId);

    formData.append("photo", photoForm.getValues("photo"));
    const response: AxiosResponse = await hostImage.post(
      "/user/photo",
      formData
    );
    if (response.data) {
      console.log(response);
      return response.data;
    }
  };

  // mutation for login
  const photoMutation = useMutation({
    mutationFn: uploadUserPhoto,
    onSuccess: () => {
      console.log("Done");
      toast.success("Signed successfully");
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
  });

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      photoMutation.mutate({
        photo: photoForm.getValues("photo"),
        userId: getCookie("airbnb_userId"),
      });
    },
  });

  if (!getCookie("airbnb_userId")) {
    return (
      <Dialog open={getCookie("airbnb_userId") ? false : undefined}>
        <DialogTrigger className="z-100">
          <div>
            <div className="pl-5 gap-2 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
              <UserPlus size={15}></UserPlus> Sign up
            </div>
            <div className="pl-5 gap-2 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
              <LogIn size={15}></LogIn>Log in
            </div>
          </div>
        </DialogTrigger>
        {steps === 1 && (
          <SignInDialogContent
            steps={steps}
            setSteps={setSteps}
            loginForm={loginForm}
          ></SignInDialogContent>
        )}
        {steps === 2 && (
          <OTPConfirm
            setSteps={setSteps}
            countryCode={loginForm.getValues("countryCode")}
            phone={loginForm.getValues("phone")}
          ></OTPConfirm>
        )}
        {steps === 3 && (
          <UserName setSteps={setSteps} loginForm={loginForm}></UserName>
        )}
        {steps === 4 && (
          <>
            <DialogContent className="flex flex-col items-center">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">
                  Upload your photo
                </DialogTitle>
              </DialogHeader>
              <PhotoUpload
                step={steps}
                mainPhotoForm={photoForm}
                setSteps={setSteps}
              ></PhotoUpload>
              <Button
                className="w-80 "
                onClick={() => {
                  signInMutation.mutate({
                    phone: loginForm.getValues("phone"),
                    countryCode: loginForm.getValues("countryCode"),
                    name: loginForm.getValues("name"),
                  });
                }}
              >
                Submit
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    );
  }
};

export default SignInDialog;
