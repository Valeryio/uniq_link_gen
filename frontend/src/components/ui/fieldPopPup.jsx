

import { useState, useEffect } from "react";
import Button from "./button";
import useFieldInfos from "@/hooks/useFieldInfos";
import useCard from "@/hooks/useCard";

const FieldPopUp = ({
	fieldId = 0,
	show=true,
	closeByParent
}) => {

	const { fieldsInfos } = useFieldInfos();
	const { cardFormData, setCardFormData } = useCard();
	const [close, setClose] = useState(false);
	
	const [formData, setFormData] = useState({
		label: fieldsInfos[fieldId].fieldName,
		type: fieldsInfos[fieldId].type,
		value: ""
	});

	useEffect(() => {
		setFormData({
			fieldId: fieldId,
			label: fieldsInfos[fieldId].fieldName,
			type: fieldsInfos[fieldId].type,
			value: ""
		});

	}, [fieldId]);


	const handleClose = () => {
		setClose(!close);
		closeByParent();
	}

	useEffect(() => {
	 	setClose(false);
	}, [show]);

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		setCardFormData((cardFormData) => ({
			...cardFormData,
			elements: [...cardFormData.elements, formData]
		}));
	
		handleClose();
	}

	useEffect(() => {
		// console.log("This is the formData : ", formData, cardFormData);
	}, [cardFormData]);


	return (
		<form className={`${!close && show ? "flex" : "hidden"} bg-white p-[1.5rem] shadw-2xl rounded-9x border-2 w-[22rem]
		absolute h-fit flex-col gap-[1rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
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