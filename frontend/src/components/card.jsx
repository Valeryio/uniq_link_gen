import useAuth from "@/hooks/useAuth";
import useCard from "@/hooks/useCard";
import { useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import useFieldInfos from "@/hooks/useFieldInfos";
import { FIELD_TYPE_CONFIG } from "@/fieldTypeConfig";

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
	const fieldsInfos = Object.values(FIELD_TYPE_CONFIG);
	const { cardFormData, setCardFormData } = useCard();
	let cardElements = [];
	
	useEffect(() => {
		// console.log("Nous avons cardformdata depuis card : ", cardFormData);

	}, [cardFormData]);

	/**
	 * @function removeElements 
	 * @description - handle the remove button. Remove an element from 
	 * 							the temp card built by the user, when adding its 
	 * 							informations.
	 * @param {*} id 
	 */
	const removeElements = (value) => {
		console.log("VOici : ", cardFormData);
		let allElements = cardFormData.elements.filter(elements => (elements.value != value));
		setCardFormData((cardFormData) => (
			{
				...cardFormData,
				elements: allElements
			}
		))
	};

	/**
	 * @function handleNameChange
	 * @description - handle the modification of the card name, and
	 * 							update the name of the personal card at the global
	 * 							context variable
	 * @param {*} event 
	 */
	const handleNameChange = (event) => {
		setCardFormData((cardFormData) => ({
			...cardFormData,
			title: event.target.value
		})
	);
	}


	if (!cardFormData.elements.length) {
		return <DefaultCard />
	} else {
		cardElements = cardFormData.elements;
		console.log("Nous avons les cardELEMENTS : ", cardFormData.elements.length, cardElements);
	}

	return (
		
		<div className=" cursor-pointer w-[32rem] overflow-hidden h-fit bg-white flex flex-col rounded-16x
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

			<div className=" flex flex-col w-full gap-[1rem] px-[1rem] py-[1.6rem] text-[.9rem] font-light " >
				{
					cardElements.map((element) => (
						<div className="flex w-full gap-[1rem] border-secondary-purple 
							outline-primary-purple rounded-[.25rem]" key={`${FIELD_TYPE_CONFIG[`${element.label.toLowerCase()}`].id}`+uuidv4()} >

							<div className="flex w-full border gap-[1rem] border-secondary-purple 
							outline-primary-purple rounded-[.25rem] px-[.8rem] text-gray-500
							py-[.5rem]">
								<img src={FIELD_TYPE_CONFIG[`${element.label.toLowerCase()}`].source} alt="" className=""/> 
								<a href={`${element.value}`} target="_blank" rel="noopener noreferrer">{element.value}</a>
							</div>

							<button onClick={() => {
								console.log(FIELD_TYPE_CONFIG[`${element.label.toLowerCase()}`]);
								
								removeElements(element.value);
								// removeElements(FIELD_TYPE_CONFIG[`${element.label.toLowerCase()}`]);
							}} className="p-[.5rem] hover:bg-red-100 rounded-[.25rem] cursor-pointer " >
								<img src="/icons/trash.svg" className="opacity-50 h-[1.5rem] hover:opacity-100 " />
							</button>
						</div>

					))
				}

				
			</div>

			<div className="border-t w-full px-1 pt-4 pb-2 flex justify-center border-light-purple" >
					
				<div>
					<input type="text" placeholder="Entrez le nom de la carte"  name="value"
					className=" text-center placeholder:text-gray-400 outline-primary-purple
					rounded-[.25rem] px-[.5rem] py-[.1rem]" value={cardFormData.title} onChange={handleNameChange} />
				</div>

			</div>

		</div>
	)
};

export default Card;