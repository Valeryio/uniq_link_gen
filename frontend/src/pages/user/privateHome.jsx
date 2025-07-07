import useAuth from "@/hooks/useAuth";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";
import FieldInfoButton from "@/components/ui/fieldInfoButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PrivateHome = () => {

	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						4 cards
					</span>
				</p>
	
				<Link to="/app/card/add" >
					<Button addIcon={true} imgSrc={"../icons/list-plus.svg"} >
						Ajouter une nouvelle information
					</Button>
				</Link>

			</div>

			<div className=" h-[32rem] bg-lightest-purple">
				<div className=" flex  flex-wrap p-[1rem] gap-[2rem] ">
					<img src="../images/card-1.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="../images/card-2.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="../images/card-3.png" alt="Contact card" 
					className="border border-medium-purple rounded-9x" />
				</div>
			</div>
		</>
	)
};

export default PrivateHome;