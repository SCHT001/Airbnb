import { FC } from "react";

const InfoCard: FC<{
  title: string;
  description: string;
  linkText: string;
  children: any;
}> = ({ description, linkText, title, children }) => {
  return (
    <div className="flex justify-between">
      <div className="title-and-des">
        <div className="font-medium">{title}</div>
        <div className="text-slate-500">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
