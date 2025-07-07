

import { useState, useEffect } from "react";
import Button from "./button";
import useFieldInfos from "@/hooks/useFieldInfos";
import useCard from "@/hooks/useCard";

const FieldPopUp = ({
	fieldId = 0,
	show=true,
	onClose
}) => {

	
	// Context Global variables
	const { fieldsInfos } = useFieldInfos();
	const { setCardFormData } = useCard();

	/**
	 * close - Boolean variable to set the state of the pop up. Open or 
	 * not. It's an intern control variable for the pop up!
	 */
	const [close, setClose] = useState(false);

	/**
	 * formData - contains all the data of each input field for the form
	 * in the popUp
	 */
	const [formData, setFormData] = useState({
		label: fieldsInfos[fieldId].fieldName,
		type: fieldsInfos[fieldId].type,
		value: ""
	});


	/**
	 * Remount the formData to update the informations in the 
	 * popUp and get a new field
	 */
	useEffect(() => {
		setFormData({
			fieldId: fieldId,
			label: fieldsInfos[fieldId].fieldName,
			type: fieldsInfos[fieldId].type,
			value: ""
		});

	}, [fieldId]);


	/**
	 * @function handleClose
	 * @description - close the popUp from the intern close button
	 */
	const handleClose = () => {
		setClose(!close);
		onClose();
	};

	/**
	 * The initial state of close is not updated when 
	 * show changes. We have to update it to false again 
	 * to allow the component to open Up !
	 */
	useEffect(() => {
	 	setClose(false);
	}, [show]);

	/**
	 * @function handleChange
	 * @description - handle the changes in the main input
	 * 							field of the popUp
	 * @param {*} event 
	 */
	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	/**
	 * @function handleSubmit
	 * @description - handle the submit button and add the informations
	 * 							contained in the form data in the global context 
	 * 							variable to fill the card's element attribute
	 * @param {*} event 
	 */
	const handleSubmit = (event) => {
		event.preventDefault();

		setCardFormData((cardFormData) => ({
			...cardFormData,
			elements: [...cardFormData.elements, formData]
		}));
	
		handleClose();
	};

	return (
		<form className={`${!close && show ? "flex" : "hidden"} bg-white p-[1.5rem] shadw-2xl rounded-9x border-2 w-[22rem]
		absolute h-fit z-1 flex-col gap-[1rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
		shadow-[0px_0px_10000000px_rgba(0,0,0,0.25)]`} >

			<div className="flex justify-between" >
				<h2 className="text-h6 font-semibold" >
					Ajouter un champ {}
				</h2>

				<button type="button" onClick={handleClose}
				className="cursor-pointer hover:opacity-50 " >
					<img src="/icons/cross-x.svg" alt="" />
				</button>

			</div>

			
			<div className="flex border gap-[1rem] w-full border-secondary-purple 
				outline-primary-purple rounded-[.25rem] px-[.8rem] 
				py-[.5rem]">
				<img src={fieldsInfos[fieldId].source} alt="" className=""/>
				<input type="text" disabled placeholder="Entrez le lien du champ" 
				className="" name="label" value={fieldsInfos[fieldId].fieldName} 
				 />
			</div>

			
			{/*
			  (fieldsInfos[fieldId].fieldName != "Lien") &&

				<div>
					<div className="flex border gap-[1rem] w-full border-secondary-purple 
						outline-primary-purple rounded-[.25rem] px-[.8rem] text-gray-500
						py-[.5rem]">
						<img src={fieldsInfos[13].source} alt="" className=""/>
						<input type="text" disabled placeholder="Entrez le lien du champ" 
						className="" name="type" value={"Lien"}/>
					</div>
				</div>
			*/}


			<div className="flex flex-col gap-[1rem]">
			<label className="text-medium-purple " >
				Ajoutez le lien à enregistrer
			</label>
				<input type="text" placeholder="Entrez le lien du champ"  name="value"
				className=" placeholder:text-gray-400 border w-full border-primary-purple outline-primary-purple
				rounded-[.25rem] px-[.8rem] py-[.5rem]" value={formData.value} onChange={handleChange} />
			</div>

			<div className="flex justify-between " >

				<Button styleType="secondary" className=""
				type="button" onClick={handleClose}
				>
					Annuler
				</Button>
				
				<Button size=""
					className=""
					onClick={handleSubmit}
				>
					Enregistrer le champ
				</Button>
			</div>

		</form>
	)

};


export default FieldPopUp;