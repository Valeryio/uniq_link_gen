
import Button from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import FieldPopUp from "@/components/ui/fieldPopPup";
import FieldInfoButton from "@/components/ui/fieldInfoButton";
import useFieldInfos from "@/hooks/useFieldInfos";
import useCard from "@/hooks/useCard";
import { refactorCardForm } from "@/utils/card.utils";
import useAuth from "@/hooks/useAuth";


/**
 * @component Add card
 * @description - This component manage the globale state of a created
 * 							card of information, and send them to the backend API.
 */
const AddCard = () => {

	const navigate = useNavigate();
	const { user } = useAuth();
	const { loading, fieldsInfos } = useFieldInfos(); 
	const { cardFormData, setCardFormData } = useCard()

	/**
	 * fieldId - Number variable to identify the field id in the table of 
	 * ressources needed in the information.
	 */
	const [fieldId, setFieldId] = useState(0);

	/**
	 * show - Boolean variable to set the state of the pop up. Open or 
	 * not.
	 */
	const [show, setShow] = useState(false);

	/**
	 * This block allow the fields ressources to load before the web page
	 * otherwise, the section with the sources don't display needed
	 * needed ressources.
	 */
	useEffect(() => {
		if (!fieldsInfos && loading === false) {
			console.error("Failed to fetch the ressource");
		}

	}, [loading, fieldsInfos]);

	if (loading) {
		return  <div className="text-center p-4">Chargement...</div>
	}


	/**
	 * @function closePopUp
	 * @description - Close the popUp from the pop up by changing the value
	 * 							of - show (variable) - to false
	 */
	const closePopUp = () => {
		setShow(false)
	};

	/**
	 * @function openPopUp
	 * @description - Open the popUp from the pop up by changing the value
	 * 							of - show (variable) - to true
	 */
	const openPopUp = () => {
		setShow(!show);
	};

	/**
	 * @function handleCardSubmitting
	 * @description - Handle the card informations when submitting them, and
	 * 							send them to the backend.
	 * @param {*} e
	 */
	const handleCardSubmitting = async (e) => {

		if (!cardFormData.elements.length) {
			alert("Nous ne pouvons pas enregistrer une carte vide. Vous pouvez abandonner la carte !");
			return;
		}

		refactorCardForm(cardFormData);

		console.log("After all : ", cardFormData);

		try {

			let response = await fetch(`http://${import.meta.env.VITE_BACKEND_API}/cards/add`, {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(cardFormData),
				credentials: "include"
			});

			response = await response.json();
			console.log("THE RESPONSE : ", response);

		} catch (err) {
			console.error("Error while creating the new cards");
		}

		// Set the card context to the default value
		setCardFormData({
			"title": "",
			"user_id": `${user.id}`,
			"elements": [
			]
		});
		
		navigate("/app/home");

	};

	/**
	 * @function handleDiscard
	 * @description handle the discard button and redirect the user to the
	 * 							main page of the application
	 */
	const handleDiscard = () => {
		navigate("/app/home");
	}


	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">

				<FieldPopUp show={show} fieldId={fieldId} label={""} onClose={closePopUp} />
				<div className="flex gap-[1rem]">
				<Link className="text-p text-primary-purple font-semibold border-b">
						Création
				</Link>
				</div>

				<div className="flex gap-[1rem]">
					<Button styleType="secondary" onClick={handleDiscard} >Abandonner la carte</Button>
					<Button type="button" onClick={handleCardSubmitting} >Enregistrer la carte</Button>
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
											openPopUp();
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
										handleClick={() => {
											openPopUp(infos.id - 1);
											setFieldId(infos.id - 1);
										}} >
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