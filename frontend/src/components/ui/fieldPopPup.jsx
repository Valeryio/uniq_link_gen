

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
		<form className={`${!close? "flex" : "hidden"} bg-white p-[1.5rem] shadw-2xl rounded-9x border-2 w-[22rem]
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
				<img src={fieldsInfos[14].source} alt="" className=""/>
				<input type="text" disabled placeholder="Entrez le lien du champ" 
				className="" name="type" value={"link"} />
			</div>

			<div>
				<label className="text-medium-purple " >
					Lien 
				</label>
				<div className="flex border gap-[1rem] w-full border-secondary-purple 
					outline-primary-purple rounded-[.25rem] px-[.8rem] 
					py-[.5rem]">
					<img src={fieldsInfos[fieldId].source} alt="" className=""/>
					<input type="text" disabled placeholder="Entrez le lien du champ" 
					className="" name="label" value={fieldsInfos[fieldId].fieldName} />
				</div>
			</div>a


			<div className="flex flex-col gap-[1rem]">
			<label className="text-medium-purple " >
				Ajoutez le lien à enregistrer
			</label>
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