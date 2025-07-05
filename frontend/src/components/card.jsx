import useAuth from "@/hooks/useAuth";
import useCard from "@/hooks/useCard";
import useFieldInfos from "@/hooks/useFieldInfos";

const DefaultCard = () => {

	const {user} = useAuth()
	let date = new Date();

	return (
		
		<div className=" cursor-pointer max-w-[18rem] overflow-hidden h-fit bg-white flex flex-col rounded-16x
			gap-[1.5rem] items-center border hover:shadow-lg border-light-purple px-[.5rem] py-[.5rem]">
			<img src="/images/card_banner.jpg" className="max-w-[100%]" alt="" />

			<p className=" text-[1.5rem]" >
				{ user.name }
			</p>

			<div className="px-[1rem] py-[1.6rem] text-center text-[.9rem] font-light " >
				Aucune informations a partager !
				Veuillez en ajouter sur la carte !
			</div>

			<div className="border-t w-full px-1 pt-4 pb-2 flex justify-between border-light-purple" >
				<p className="font-bold" >
					Personnel
				</p>

				<p className="text-medium-purple" >
					{date.toLocaleDateString()}
				</p>
			</div>

		</div>
	)
}

const Card = () => {

	const {user} = useAuth();
	const { fieldsInfos } = useFieldInfos();
	const { cardFormData } = useCard();
	let date = new Date();
	let cardElements = []

	// console.log("THis is the formdata from the card : ", cardFormData, cardFormData.elements.length);

	if (!cardFormData.elements.length) {
		return <DefaultCard />
	} else {
		cardElements = cardFormData.elements;
		console.log(" The elements : ", cardElements);
	}

	return (
		
		<div className=" cursor-pointer min-w-[18rem] overflow-hidden h-fit bg-white flex flex-col rounded-16x
			gap-[1.5rem] items-center border hover:shadow-lg border-light-purple px-[.5rem] py-[.5rem]">
			{/* <img src="/images/card_banner.jpg" className="max-w-[100%]" alt="" /> */}

			<div className="flex w-full justify-between px-[.5rem] " >
				<p className=" text-[.8rem] font-medium text-gray-600 " >
					Sender :
				</p>
				<p className=" text-[.8rem] font-medium text-gray-800 " >
					{ user.name }
				</p>
			</div>

			<div className=" flex flex-col gap-[1rem] px-[1rem] py-[1.6rem] text-[.9rem] font-light " >

				{
					cardElements.map((element) => (
						<div className="flex border gap-[1rem] border-secondary-purple 
							outline-primary-purple rounded-[.25rem] px-[.8rem] text-gray-500
							py-[.5rem]">
							<img src={fieldsInfos[element.fieldId].source} alt="" className=""/>
							<a href={`${element.value}`} >{element.value}</a>
						</div>

					))
				}

				
			</div>

			<div className="border-t w-full px-1 pt-4 pb-2 flex justify-between border-light-purple" >
				<p className="font-bold" >
					Personnel
				</p>

				<p className="text-medium-purple" >
					{date.toLocaleDateString()}
				</p>
			</div>

		</div>
	)
};

export default Card;