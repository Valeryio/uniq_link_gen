import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Button from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import useCard from "@/hooks/useCard";


const PrivateHome = () => {

	const { user } = useAuth();
	const navigate = useNavigate();
	const { cardFormData, setCardFormData } = useCard();
	const [savedCard, setSavedCard] = useState([]);
	const [update, setUpdate] = useState(false);
	const cardLink = `http://${import.meta.env.VITE_BACKEND_API}/cards/`;


	// Fetch the user's card from the database
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
				let userCards = [];

				console.log("La reponse directe : ", response);

				if (response) {
					userCards.push(...response);
					setSavedCard(userCards)
				} else {
					setSavedCard([]);
				}
				
			} catch (err) {
				console.error(`Error while fetching the cards : ${err}`)
			}
	};

	fetchCard();


	}, [update]);


	const copyLink = async (e) => {

		e.preventDefault();
		console.log(e.target.href);
		e.target.textContent = "Copie effectuée !"
		await navigator.clipboard.writeText(e.target.href);

		if (navigator.clipboard) {
			console.log("ClipBoard available !");
		}

		setTimeout(() => {
			e.target.textContent = "Copier le lien"
		}, 2000)

	}


	const modifyCard = (card) => {

		// e.preventDefault();
		// console.log("NOus avons actuellement : ", card,)
	
		// console.log("NOus avons : ", cardFormData);

		setCardFormData(card);
		navigate("/app/card/add");
	
	};

	useEffect(() => {
		
		console.log("NOus avons : ", cardFormData);


	}, [cardFormData]);
	

	/**
	 * @function removeElements
	 * @description - remove a specific card from the database
	 * @param {*} id 
	 */
	const removeElements = async (id) => {
		// console.log("TO remove", id);

		try {
			let response = await fetch(`http://${import.meta.env.VITE_BACKEND_API}/cards/${id}`,
			{
				method: "DELETE",
				credentials: "include"
			});

			response = await response.json();
			console.log(response);

		} catch (err) {
			console.error(`Error while deleting the card : ${err}`);
		}

		setUpdate(!update);

	};


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
							<div key={card._id} className="w-[16rem] h-fit cursor-pointer rounded-[4px] border-2
							  hover:shadow-lg bg-white " >
								<div className=" p-[1rem] bg-[#1e1a78] flex justify-between items-center ">
									<h3 className="text-white" >
										{card.title }
									</h3>

									
									<button onClick={() => {
										removeElements(card._id);
									}} className="p-[.5rem] bg-white hover:bg-red-100 rounded-[.25rem] cursor-pointer " >
										<img src="/icons/trash.svg" className="opacity-50 h-[1.5rem] hover:opacity-100 " />
									</button>
								</div>

								<div className=" p-[.5rem] ">
									{
										card.elements.map(element => (

											<div key={element._id} className=" border basis-auto p-[.5rem] 
											flex flex-col justify-between "> 
												<p className="text-black " >
												{element.label}
												{console.log(element.value)}
												</p>

												<a href={`https://${element.value}`} target="_blank" rel="noopener noreferrer"
												className="text-blue-500 text-underline text-italic " >
													Lien vers le site
												</a>
												
											</div>
										))
									}
								</div>

								<div className=" p-[.5rem] border flex flex-col gap-[1rem] ">

									<button className="px-[1rem] grow-0 shrink-0 py-[.8rem] border 
									 cursor-pointer border-[#048aea] rounded-[32px] " >
										<Link to={`/card/${card._id}`} target="_blank"
										className=" text-underline text-italic " >
											Consulter la carte
										</Link>
									</button>

									<button >
										<a href={`/card/${card._id}`} target="_blank"
										className="px-[1rem] block grow-0 shrink-0 py-[1rem] border 
									 cursor-pointer border-[#048aea] rounded-[32px] " onClick={copyLink} >
											Partager la carte
										</a>
									</button>

									
									<button >
										<a href={`/card/${card._id}`} target="_blank"
										className="px-[1rem] block grow-0 shrink-0 py-[1rem] border 
									 cursor-pointer border-[#048aea] rounded-[32px] " onClick={(e) => {
										e.preventDefault()
										modifyCard(card);
									 }} >
											Modifier la carte
										</a>
									</button>
								</div>

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