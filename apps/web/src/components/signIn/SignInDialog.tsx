import { user } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(loginForm.getValues());
    console.log(photoForm.getValues());
  }, [steps]);

  const signIn = async (data: {
    name: string;
    phone: string;
    countryCode: string;
  }) => {
    const response: AxiosResponse = await user.post("/auth/signIn/phone", data);
    if (response.data) {
      setCookie("token", response.data.data.token);
      setCookie("airbnb_userId", response.data.data.userId);
      toast.success("Logged in");
      return response.data;
    }
  };

  const uploadUserPhoto = async (data: any) => {
    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("photo", data.photo);

    const response: AxiosResponse = await user.post("/user/photo", formData);
    if (response.data) {
      setTimeout(() => {
        location.reload();
      }, 500);
    }
    return response.data;
  };

  // mutation for login
  const photoMutation = useMutation({
    mutationFn: uploadUserPhoto,
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
  //   Photo upload

  // if (steps === 5) {
  //   signInMutation.mutate({
  //     phone: loginForm.getValues("phone"),
  //     countryCode: loginForm.getValues("countryCode"),
  //     name: loginForm.getValues("name"),
  //   });
  // }

  if (!getCookie("token")) {
    return (
      <Dialog open={getCookie("token") ? false : undefined}>
        <DialogTrigger className="z-100">
          <div>
            <div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
              Sign up
            </div>
            <div className="pl-5 items-center hover:bg-slate-100 font-semibold w-full h-10  text-start flex justify-start">
              <>Log in</>
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
                className="w-full "
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
