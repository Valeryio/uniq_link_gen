import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";
import useFieldInfos from "@/hooks/useFieldInfos";
import Card from "@/components/card";


const PrivateHome = () => {

	const { user } = useAuth();
	const { fieldsInfos } = useFieldInfos();
	const [savedCard, setSavedCard] = useState([]);

	// console.log("HELLO WORLD IM HERE : ", user);

	useEffect(() => {

		const fetchCard = async () => {
			try {
				let response = await fetch(
					`http://${import.meta.env.VITE_BACKEND_API}/cards/user/${user.id}`, 
				{
					method: "GET",
					credentials: "include"
				});

				response = await response.json();
				response = response.data;

				let result = [];

				console.log(response)

				result.push(response);
				setSavedCard(result)
				
				
			} catch (err) {
				console.error(`Error while fetching the cards : ${err}`)
			}
	};

	fetchCard();


}, []);

	useEffect(() => {

		// console.log("La sauvegarde : ", savedCard);
	}, [savedCard]);

	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						{savedCard.length} cards
					</span>
				</p>
	
				<Link to="/app/card/add" >
					<Button addIcon={true} imgSrc={"../icons/list-plus.svg"} >
						Ajouter une nouvelle information
					</Button>
				</Link>

			</div>

			<div className=" h-[64rem] bg-lightest-purple">
				<div className=" flex  flex-wrap p-[1rem] gap-[2rem] ">

					{
						savedCard != [] ?
						
							savedCard.map(card => (
							<div key={card._id} className="w-[16rem] min-h-[16rem] cursor-pointer rounded-[4px] border-2
							  hover:shadow-lg border-green-600  " >
								<div className=" p-[1rem] bg-primary-purple ">
									<h3 className="text-white" >
										{card.title }
										{/* {console.log(card.elements)} */}
									</h3>
								</div>

								{
									card.elements.map(element => (

										<div key={element._id} className=" p-[1rem] "> 
											<p className="text-black " >
											{element.label}
											{console.log(element.label)}
											</p>
											
											<a href={`${element.value}`} target="_blank" rel="noopener noreferrer"
											className="text-blue-500 text-underline text-italic " >
												Lien vers le site
											</a>
										</div>
									))
								}

							</div>
							))

						:
							null
					}


				</div>


			</div>
		</>
	)
};

export default PrivateHome;