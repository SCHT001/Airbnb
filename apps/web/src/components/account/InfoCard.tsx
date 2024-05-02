import { FC } from "react";

const InfoCard: FC<{
  title: string;
  description: string;
  linkText: string;
}> = ({ description, linkText, title }) => {
  return (
    <div className="flex justify-between">
      <div className="title-and-des">
        <div className="font-medium">{title}</div>
        <div className="text-slate-500">{description}</div>
      </div>
      <div className="action-button ">{linkText}</div>
    </div>
  );
};

export default InfoCard;
