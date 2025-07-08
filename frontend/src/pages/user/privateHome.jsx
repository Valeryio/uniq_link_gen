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
	const cardLink = `http://${import.meta.env.VITE_BACKEND_API}/cards/`;


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

				console.log("La reponse directe : ", response);

				let result = [];

				// console.log(response);
				if (response) {
					result.push(...response);
					setSavedCard(result)
				} else {
					setSavedCard([]);
				}
				
			} catch (err) {
				console.error(`Error while fetching the cards : ${err}`)
			}
	};

	fetchCard();


}, []);

	useEffect(() => {

		console.log("La sauvegarde : ", savedCard);
	}, [savedCard]);

	return (
		<div className=" flex flex-col h-[89%] border border-green-500" >
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						{savedCard.length || 0} cards
					</span>
				</p>
	
				<Link to="/app/card/add" >
					<Button addIcon={true} imgSrc={"../icons/list-plus.svg"} >
						Ajouter une nouvelle information
					</Button>
				</Link>

			</div>

			<div className=" border h-full border-yellow-400 bg-lightest-purple">
				<div className=" flex  flex-wrap p-[1rem] gap-[2rem] ">

					{
						savedCard && savedCard != [] ?
						
							savedCard.map(card => (
							<div key={card._id} className="w-[16rem] overflow-auto max-h-[16rem] cursor-pointer rounded-[4px] border-2
							  hover:shadow-lg bg-white " >
								<div className=" p-[1rem] bg-[#1e1a78]">
									<h3 className="text-white" >
										{card.title }
									</h3>
								</div>

								{
									card.elements.map(element => (

										<div key={element._id} className=" border h-[80%] basis-auto border-red-400 p-[1rem] flex flex-col justify-between "> 
											<p className="text-black " >
											{element.label}
											{console.log(element.value)}
											</p>

											<a href={`${element.value}`} target="_blank" rel="noopener noreferrer"
											className="text-blue-500 text-underline text-italic " >
												Lien vers le site
											</a>

											<button className="px-[1rem] grow-0 shrink-0 py-[1rem] border 
											 cursor-pointer bg-[#048aea] rounded-[6px] " >
												{/* Partager */}

												<a href={cardLink + card._id} target="_blank" rel="noopener noreferrer"
												className=" text-underline text-italic " >
													Lien vers le site
												</a>

											</button>

											
											<button className="px-[1rem] grow-0 shrink-0 py-[1rem] border 
											 cursor-pointer bg-[#048aea] rounded-[6px] " >
												{/* Partager */}

												<Link to={`/card/${card._id}`} target="_blank"
												className=" text-underline text-italic " >
													Envoyer
												</Link>

											</button>
										</div>
									))
								}

							</div>
							))

						:
							<div>
								Vous n'avez aucune information a partager !
							</div>
					}


				</div>


			</div>
		</div>
	)
};

export default PrivateHome;