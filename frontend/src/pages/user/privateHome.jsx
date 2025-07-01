import useAuth from "@/hooks/useAuth";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";
import FieldInfoButton from "@/components/ui/fieldInfoButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PrivateHome = () => {

	return (
		<>
			<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">
				<p className="text-p text-medium-purple">
						Total :
					<span className=" text-dark-purple ml-1">
						4 cards
					</span>
				</p>
	
				<Link to="/app/card/add" >
					<Button addIcon={true} imgSrc={"../icons/list-plus.svg"} >
						Ajouter une nouvelle information
					</Button>
				</Link>
					
				{/* <Popover>
					<PopoverTrigger>
						<Button addIcon={true} imgSrc={"../icons/list-plus.svg"} >Ajouter une nouvelle information</Button>
					</PopoverTrigger>
					<PopoverContent>
						<>			
							<div className=" flex justify-between items-center px-[1rem] py-[.5rem]">

								<div className="flex gap-[1rem]">
								<Link className="text-p text-primary-purple font-semibold border-b">
										Modifications
								</Link>
								<Link className="text-p text-medium-purple">
										Caractéristiques
								</Link>
								</div>

								<div className="flex gap-[1rem]">
									<Button styleType="secondary">Abandonner les modifications</Button>
									<Button >Sauvegarder les modifications</Button>
								</div>
							</div>

							<div className="  gap-[2rem]  h-full flex p-[1.5rem] bg-lightest-purple">

								<div className=" min-w-[16rem] h-fit bg-white flex flex-col rounded-16x
									px-[1rem] py-[1.6rem] gap-[1.5rem] items-center border hover:shadow-lg border-light-purple ">
									<img src="../images/profile-img.png" className="max-w-[6rem]" alt="" />

									<p className="font-bold text-h5 ">
										John Doe
									</p>
									<p className="">
										UX Designer
									</p>
									<p className="">
										Yoka Softwares Solutions
									</p>

									<div className=" flex gap-[1rem]">
										<img src="../icons/mail.svg" alt="" />
										<p>johndoe66@gmail.com</p>
									</div>

									<div className=" flex gap-[1rem]">
										<img src="../icons/phone.svg" alt="" />
										<p>+229 0125268952</p>
									</div>

									<Button styleType="secondary" imgSrc="../icons/share-alt.svg" >Partager votre carte</Button>
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
											<FieldInfoButton source="../icons/colored-facebook.svg" >
												Facebook
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-social_x.svg" >
												Twitter
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-tiktok.svg" >
												Tiktok
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-instagram.svg" >
												Instagram
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-threads.svg" >
												Threads
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-linkedin.svg" >
												LinkedIn
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-snapchat.svg" >
												SnapChat
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-discord.svg" >
												Discord
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-github.svg" >
												Github
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-pinterest.svg" >
												Pinterest
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-telegram.svg" >
												Telegram
											</FieldInfoButton>
											<FieldInfoButton source="../icons/colored-whatsapp.svg" >
												Whatsapp
											</FieldInfoButton>
													
										</div>
									</div>

									<div className="flex flex-col gap-[.5rem]">
										<h6 className="text-h6">
											Réseaux sociaux
										</h6>

										<div className=" flex gap-[1rem] flex-wrap">
											<FieldInfoButton source="../icons/website.svg" >
												Site web
											</FieldInfoButton>
											<FieldInfoButton source="../icons/link.svg" >
												Liens
											</FieldInfoButton>
											<FieldInfoButton source="../icons/file.svg" >
												PDF
											</FieldInfoButton>
											<FieldInfoButton source="../icons/upload.svg" >
												Fichiers
											</FieldInfoButton>
											<FieldInfoButton source="../icons/blue-mail-icon.svg" >
												Email
											</FieldInfoButton>

										</div>
									</div>
								</div>
							</div>
						</>
					</PopoverContent>
				</Popover> */}

			</div>

			<div className=" h-[32rem] bg-lightest-purple">
				<div className=" flex p-[1rem] gap-[2rem] ">
					<img src="../images/card-1.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="../images/card-2.png" alt="Contact card" 
					className="border  border-medium-purple rounded-9x" />
					<img src="../images/card-3.png" alt="Contact card" 
					className="border border-medium-purple rounded-9x" />
				</div>
			</div>
		</>
	)
};

export default PrivateHome;