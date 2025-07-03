
import Button from "@/components/ui/button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import FieldPopUp from "@/components/ui/fieldPopPup";
import FieldInfoButton from "@/components/ui/fieldInfoButton";
import useAuth from "@/hooks/useAuth";
import useFieldInfos from "@/hooks/useFieldInfos";
import useCard from "@/hooks/useCard";



const AddCard = () => {

	const [cardForm, setCardForm] = useState({});
	const [fieldId, setFieldId] = useState(0);
	const [show, setShow] = useState(false);
	const {user} = useAuth("user");
	const { cardFormData, setCardFormData } = useCard();
	const { loading, fieldsInfos } = useFieldInfos(); 

	console.log("Here we got the form data : ", cardFormData);

	useEffect(() => {
		if (!fieldsInfos && loading === false) {
			console.error("Failed to fetch the ressource");
		}

	}, [loading, fieldsInfos]);

	if (loading) {
		return  <div className="text-center p-4">Chargement...</div>
	}

	const showPopUp = () => {
		setShow(!show);
		console.log("The field : ", fieldId);
		console.log("Show : ", show);
	};

	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">

				{ show && <FieldPopUp fieldId={fieldId} />}
				<div className="flex gap-[1rem]">
				<Link className="text-p text-primary-purple font-semibold border-b">
						Modifications
				</Link>
				</div>

				<div className="flex gap-[1rem]">
					<Button styleType="secondary">Abandonner la carte</Button>
					<Button type="button">Enregistrer la carte</Button>
				</div>
			</div>

			<div className=" gap-[2rem] h-full flex p-[1.5rem] bg-lightest-purple">

				<Card />

				<div className=" w-full h-fit bg-white rounded-16x flex flex-col gap-[1.5rem]
					px-[1rem] py-[1.6rem] border hover:shadow-lg border-light-purple ">
					<div className="flex flex-col gap-[1rem]">
						<h6 className="text-h6">
							Champs à ajouter
						</h6>

						<p className=" max-w-[38rem] ">
							Cliquez sur le champ que vous voulez enregistrer et entrez les informations nécessaires.
							N’oubliez surtout pas de sauvegarder les modifications apportées à la carte.
						</p>
					</div>
							
					<div className="flex flex-col gap-[.5rem]">
						<h6 className="text-h6">
							Réseaux sociaux
						</h6>

						<div className=" flex gap-[1rem] flex-wrap">

							{
								fieldsInfos.map(infos => (
									
									infos.tag === "social-network" 
									?
										<FieldInfoButton source={infos.source} key={infos.id}
										handleClick={() => {
											showPopUp();
											setFieldId(infos.id - 1);
										}}>
											{infos.fieldName}
										</FieldInfoButton>
									:
									null
								))
							}								
						</div>
					</div>

					<div className="flex flex-col gap-[.5rem]">
						<h6 className="text-h6">
							Réseaux sociaux
						</h6>

						<div className=" flex gap-[1rem] flex-wrap">

							{
								fieldsInfos.map(infos => (
									
									infos.tag === "media" 
									?
										<FieldInfoButton source={infos.source} key={infos.id}
										handleClick={showPopUp} >
											{infos.fieldName}
										</FieldInfoButton>
									:
									null
								))
							}		

						</div>
					</div>
				</div>
			</div>
		</>
	)

};


export default AddCard;