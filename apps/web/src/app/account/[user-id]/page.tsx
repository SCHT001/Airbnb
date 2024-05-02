import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareUser } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col px-[25%] pt-20">
      <div className="header text-3xl font-medium">Account</div>
      <div>
        <span className="font-medium">Sachet Subedi</span>,
        sachetsubedi001@gmail.com
      </div>

      <div className="cards pt-10">
        <Link href={"/"}>
          <Card className="w-80 shadow-lg">
            <CardHeader>
              <CardTitle>
                <SquareUser></SquareUser>{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-medium">Personel info</span> <br />
              <span className="text-slate-500">
                Provide personel details and how we can reach you
              </span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
export default Page;
