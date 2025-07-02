
import Button from "@/components/ui/button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import FieldPopUp from "@/components/ui/fieldPopPup";
import FieldInfoButton from "@/components/ui/fieldInfoButton";
import useAuth from "@/hooks/useAuth";
import useFieldInfos from "@/hooks/useFieldInfos";



const AddCard = () => {

	const [cardForm, setCardForm] = useState({});
	const [show, setShow] = useState(false);
	const {user} = useAuth("user");
	const { loading, fieldsInfos } = useFieldInfos(); 



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
		console.log("Show : ", show);
	};


	return (
		<>
			{ show && <FieldPopUp />}
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">

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

			<div className="  gap-[2rem]  h-full flex p-[1.5rem] bg-lightest-purple">

				<div className=" min-w-[16rem] h-fit bg-white flex flex-col rounded-16x
					px-[1rem] py-[1.6rem] gap-[1.5rem] items-center border hover:shadow-lg border-light-purple ">
					<img src="/images/profile-img.png" className="max-w-[6rem]" alt="" />

					<p className="font-bold text-h5 ">
						{user.name}
					</p>

					{/* <p className="">
						UX Designer
					</p>
					<p className="">
						Yoka Softwares Solutions
					</p> 
					
					<div className=" flex gap-[1rem]">
						<img src="../icons/phone.svg" alt="" />
						<p>+229 0125268952</p>
					</div>
					
					*/}

					<div className=" flex gap-[1rem]">
						<img src="../icons/mail.svg" alt="" />
						<p>{user.email}</p>
					</div>


					<Button styleType="secondary" imgSrc="/icons/share-alt.svg" >Partagez</Button>
				</div>

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
									
									infos.type === "social-network" 
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

					<div className="flex flex-col gap-[.5rem]">
						<h6 className="text-h6">
							Réseaux sociaux
						</h6>

						<div className=" flex gap-[1rem] flex-wrap">

							{
								fieldsInfos.map(infos => (
									
									infos.type === "media" 
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