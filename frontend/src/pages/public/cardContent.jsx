
import { useEffect, useState } from "react";
import { useParams } from "react-router";


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

		if (card) {
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
			<div className=" border " >
				{card.title}
				This is the card Content
			</div>
		</div>
	)

};

export default CardContent;