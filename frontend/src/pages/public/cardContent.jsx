
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FIELD_TYPE_CONFIG } from "@/fieldTypeConfig";


const CardContent = () => {


	const { cardId } = useParams();
	const [loading, setLoading] = useState(true);
	const [card, setCard] = useState({});

	if (!cardId) {
		return (
			<div>
				Aucune information a montrer !
			</div>
		)
	}


	useEffect(() => {
		console.log(card);
		console.log(card.elements);
		console.log("DATA : ", FIELD_TYPE_CONFIG[`${"Facebook".toLowerCase()}`].source)

		if (card && card.elements) {
			setLoading(false);
		}

	}, [card]);


	useEffect(() => {

		const fetchCard = async () => {

			try {
				let response = await fetch(
					`http://${import.meta.env.VITE_BACKEND_API}/cards/${cardId}`,
					{
						method: "GET"
					});
				
				response = await response.json();
				response = response.data;
				setCard(response);

			} catch (err) {
					console.error(`Error while fetching the card's data : `, err);
			}

		};

		fetchCard();

	}, []);


	if (loading) {
		return (
			<div>
				Chargement...
			</div>
		)
	}

	return (
		<div className=" flex justify-center items-center h-full ">
			<div className=" border min-h-[16rem] w-[20rem] " >
				<div className=" p-[1.5rem] bg-[#1e1a78]">
					<h3 className="text-white" >
						{card.title }
					</h3>
				</div>

				<div  className="p-[1.5rem] " >

					{
						card.elements.map( element => (
							<div key={element._id} className=" flex py-[.5rem] gap-[1rem] " >
								<img src={FIELD_TYPE_CONFIG[`${element.label.toLowerCase()}`].source}
								alt="" />

								<a href={`https://${element.value}`} target="_blank" rel="noopener noreferrer"
								className="text-blue-500 text-underline text-italic " >
									{element.value}
								</a>
							</div>
						))
					}

				</div>
			</div>
		</div>
	)

};

export default CardContent;