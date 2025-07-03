
const Card = () => {
	return (

		<div className=" w-[40rem] gap-[2rem]  h-full flex p-[1.5rem] bg-lightest-purple">

				<div className=" max-w-[20rem] overflow-hidden h-fit bg-white flex flex-col rounded-16x
					gap-[1.5rem] items-center border hover:shadow-lg border-light-purple px-[.5rem] py-[.5rem]">
					<img src="/images/card_banner.jpg" className="max-w-[100%]" alt="" />

					<div className="px-[1rem] py-[1.6rem] text-center" >
						Aucune informations a partager !
						Veuillez en ajouter sur la carte !
					</div>

				</div>

		</div>
	)
};

export default Card;