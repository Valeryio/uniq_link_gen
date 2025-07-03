

import { useState } from "react";
import Button from "./button";
import useFieldInfos from "@/hooks/useFieldInfos";

const FieldPopUp = ({fieldId = 0}) => {

	const { fieldsInfos } = useFieldInfos();
	const [close, setClose] = useState(false);

	const handleClose = () => {
		setClose(!close);
	}




	return (
		<form className={`${!close? "flex" : "hidden"} bg-white p-[1.5rem] shadow-2xl rounded-9x border w-[22rem]
		absolute h-[22rem] flex-col gap-[1rem] left-[50%] right-[50%] translate-x-[-50%]`} >

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
				className="" value={fieldsInfos[fieldId].fieldName} />
			</div>

			<p className="text-medium-purple " >
				Ajoutez un nouveau champ en renseignant son lien un plus bas !
			</p>

			<div className="">
				<input type="text" placeholder="Entrez le lien du champ" 
				className=" border w-full border-primary-purple outline-primary-purple rounded-[.25rem] px-[.8rem] py-[.5rem]" />
			</div>

			<div className="flex justify-between " >
							
				<Button styleType="secondary" className=""
				type="button" onClick={handleClose}
				>
					Annuler
				</Button>
				
				<Button size=""
					className=""
				>
					Enregistrer le champ
				</Button>
			</div>

		</form>
	)

};


export default FieldPopUp;