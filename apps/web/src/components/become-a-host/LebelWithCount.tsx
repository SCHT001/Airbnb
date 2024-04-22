import { Minus, Plus } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const LabelWithCounter: FC<{
	setvalue: any;
	label: string;
}> = ({ setvalue, label }) => {
	const [count, setCount] = useState(0);
	return (
		<div className="flex justify-between ">
			<Label className="text-2xl">{label}</Label>
			<div className="flex items-center text-xl gap-5">
				<Button
					onClick={() => {
						setCount(count - 1);
						setvalue(count - 1);
					}}
					variant={"outline"}
					disabled={count < 1}
					className={"rounded-full px-2 py-2"}
				>
					<Minus></Minus>
				</Button>

				<div>{count}</div>

				<Button
					variant={"outline"}
					onClick={() => {
						setCount(count + 1);
						setvalue(count + 1);
					}}
					className="rounded-full px-2 py-2"
				>
					<Plus></Plus>
				</Button>
			</div>
		</div>
	);
};

export default LabelWithCounter;
