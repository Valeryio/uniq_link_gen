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
	const CARDAPI = `${import.meta.env.VITE_BACKEND_CARDS_API}`;


	// Fetch the user's card from the database
	useEffect(() => {

		/**
		 * @function fetchCard
		 * 
		 * @description - Fetches all the cards of a specific user from
		 * 							the database
		 */
		const fetchCard = async () => {
			try {
				let response = await fetch(
					`http://${CARDAPI}/user/${user.id}`, 
				{
					method: "GET",
					credentials: "include"
				});

				response = await response.json();
				response = response.data;
				let userCards = [];

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

	/**
	 * @function copyLink
	 * 
	 * @description - Copy a card link to the user's clipboard
	 * @param {*} e 
	 */
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

	/**
	 * @function modifyCard
	 * 
	 * @description - redirect to the modification page for an
	 * 							update on a specific card
	 * @param {*} card 
	 */
	const modifyCard = (card) => {

		setCardFormData(card);
		navigate("/app/card/modify", {
			state: {
				action: "modify"
			}
		});	
	};

	/**
	 * @function removeElements
	 * @description - remove a specific card from the database
	 * @param {*} id 
	 */
	const removeElements = async (id) => {

		try {
			let response = await fetch(`http://${CARDAPI}/${id}`,
			{
				method: "DELETE",
				credentials: "include"
			});

			response = await response.json();

		} catch (err) {
			console.error(`Error while deleting the card : ${err}`);
		}

		setUpdate(!update);
	};


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

			<div className=" border h-[100%] border-yellow-400 bg-lightest-purple">
				<div className=" flex  flex-wrap p-[1rem] gap-[2rem] ">

					{
						savedCard.length
						?
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

									<button className="px-[1rem] block grow-0 shrink-0 py-[1rem] border 
									 cursor-pointer border-[#048aea] rounded-[32px] " 
										 onClick={(e) => {
										e.preventDefault()
										modifyCard(card);
									 }} >
											Modifier la carte
									</button>
								</div>

							</div>
							))

						:
							<div className=" text-[4rem]  ">
								Vous n'avez aucune information a partager !
							</div>
					}

				</div>

			</div>
		</div>
	)
};

export default PrivateHome;