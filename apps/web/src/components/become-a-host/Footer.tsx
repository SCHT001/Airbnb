import { FC } from "react";
import { Button } from "../ui/button";

const Footer: FC<{
  step: number;
  setStep: any;
}> = ({ step, setStep }) => {
  return (
    <div className=" fixed bottom-0 pb-5 bg-slate-50 right-0 pr-10 left-0 pl-10 border border-t-slate-200">
      <br />
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant={"outline"}
          className="font-xl px-10 py-7 border-slate-300"
          onClick={() => {
            if (step > 1) setStep(step - 1);
          }}
        >
          Back
        </Button>
        <Button type="submit" className={"px-10 py-7"}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Footer;
