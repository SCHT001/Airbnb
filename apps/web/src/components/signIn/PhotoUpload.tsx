import { FC } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";

const PhotoUpload: FC<{
  setSteps: any;
  step: number;
  mainPhotoForm: UseFormReturn<any>;
}> = ({ setSteps, step, mainPhotoForm }) => {
  const photoForm = useForm({
    defaultValues: {
      photo: "",
    },
  });

  // const submitPhoto = () => {
  //   // setPhoto(photoForm.getValues("photo"));
  //   mainPhotoForm.setValue("photo", photoForm.getValues("photo"));
  // };

  return (
    <Form {...photoForm}>
      <form>
        <FormField
          name="photo"
          render={({ field }) => {
            return (
              <div className=" flex  flex-col items-center gap-5">
                <img
                  src="/user_default.png"
                  alt="user_default"
                  className="p-2 border-2 h-56 border-slate-400 rounded-full"
                />
                <Input
                  // {...field}
                  type="file"
                  className="border border-primary"
                  onChange={(e) => {
                    mainPhotoForm.setValue("photo", e.target.files![0]);
                  }}
                ></Input>
              </div>
            );
          }}
        ></FormField>
      </form>
    </Form>
  );
};

export default PhotoUpload;
