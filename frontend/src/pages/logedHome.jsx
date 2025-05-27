import Button from "../components/ui/button";

const LogedHome = () => {

	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						4 cards
					</span>
				</p>

				<Button addIcon={true} imgSrc={"./icons/list-plus.svg"} >Ajouter une nouvelle carte</Button>
			</div>

			<div className=" h-[32rem] bg-lightest-purple">
				<div className=" flex p-[1rem] gap-[2rem] ">
					<img src="./images/card-1.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="./images/card-2.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="./images/card-3.png" alt="Contact card" 
					className="border border-medium-purple rounded-9x" />
				</div>
			</div>
		</>
	)
};

export default LogedHome;