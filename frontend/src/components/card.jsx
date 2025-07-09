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
	const { cardFormData, setCardFormData } = useCard();
	let cardElements = [];

	/**
	 * @function removeElements 
	 * @description - handle the remove button. Remove an element from 
	 * 							the temp card built by the user, when adding its 
	 * 							informations.
	 * @param {*} id 
	 */
	const removeElements = (id) => {
		let allElements = cardFormData.elements.filter(elements => (elements.fieldId != id));
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
							outline-primary-purple rounded-[.25rem]" key={`${fieldsInfos[element.fieldId].source}`} >

							<div className="flex w-full border gap-[1rem] border-secondary-purple 
							outline-primary-purple rounded-[.25rem] px-[.8rem] text-gray-500
							py-[.5rem]">
								<img src={fieldsInfos[element.fieldId].source} alt="" className=""/>
								<a href={`${element.value}`} target="_blank" rel="noopener noreferrer">{element.value}</a>
							</div>

							<button onClick={() => {
								removeElements(element.fieldId);
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
					rounded-[.25rem] px-[.5rem] py-[.1rem]" onChange={handleNameChange} />
				</div>

				{/* <p className="text-medium-purple" >
					{date.toLocaleDateString()}
				</p> */}
			</div>

		</div>
	)
};

export default Card;