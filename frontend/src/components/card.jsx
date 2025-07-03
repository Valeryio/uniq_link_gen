import useAuth from "@/hooks/useAuth";


const Card = () => {

	const {user} = useAuth()
	let date = new Date();

	return (

		<div className=" cursor-pointer max-w-[18rem] overflow-hidden h-fit bg-white flex flex-col rounded-16x
			gap-[1.5rem] items-center border hover:shadow-lg border-light-purple px-[.5rem] py-[.5rem]">
			<img src="/images/card_banner.jpg" className="max-w-[100%]" alt="" />

			<p className=" text-[1.5rem] font-medium" >
				{ user.name }
			</p>

			<div className="px-[1rem] py-[1.6rem] text-center text-[.9rem] font-light " >
				Aucune informations a partager !
				Veuillez en ajouter sur la carte !
			</div>

			<div className="border-t w-full px-1 pt-4 pb-2 flex justify-between border-light-purple" >
				<p className="font-bold" >
					Personnel
				</p>

				<p className="text-medium-purple" >
					{date.toLocaleDateString()}
				</p>
			</div>

		</div>

	)
};

export default Card;