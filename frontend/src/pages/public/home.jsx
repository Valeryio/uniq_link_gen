
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router";
import Alert from "../../components/ui/alert";
import Button from "../../components/ui/button";

const Home = () => {

	return (
		<>
    <Header />


		<section className="flex flex-wrap justify-center gap-[2rem] px-[2rem] py-[3rem]">
			<div className="flex flex-col flex-wrap gap-[1rem] w-[40rem]">
				<h1 className="text-sm-h1 font-bold leading-[2.5rem]
				
				md:text-md-h1 md:leading-[3rem]
				lg:text-lg-h1 lg:leading-[4rem]

				">
					Vous n’avez plus besoin de carte, juste d’un lien !
				</h1>
				<p className="text-sm-p font-regular
				
				md:text-p
				">
					Centralisez vos informations professionnelles dans une 
					carte digitale claire, personnalisable et facile à partager.
					 Offrez une première impression mémorable, accessible en un 
					 simple lien.
				</p>

				<Button>Commencer</Button>
			</div>

			<picture className="min-w-[16rem] border " >
				<img src="./images/1.png" alt="" />
			</picture>
		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">
			
			<picture className=" min-w-[16rem] border w-[28rem]" >
				<img src="./images/login.png" alt="" />
			</picture>

			<div className="flex flex-col h-fit gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					1. Vos cartes business, repensées pour l’ère numérique.
				</p>
				<h2 className=" text-sm-h2 font-bold leading-[2.5rem]
				md:text-md-h2 md:leading-[3rem]
				lg:text-lg-h2 lg:leading-[4rem]				
				"
				>
					Inscrivez-vous en quelques secondes...
				</h2>
				<p className="text-sm-p font-regular
				md:text-p
				">
					Créez votre compte en utilisant votre adresse e-mail 
					professionnelle. Notre système d’authentification garantit 
					la sécurité de vos données, tout en vous offrant un accès 
					instantané à votre compte, et à la carte de base.
				</p>

				<Button>Commencer</Button>
			</div>

		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">

			<div className="flex flex-col h-fit  gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					2. Un espace à votre image.
				</p>
				<h2 className=" text-sm-h2 font-bold leading-[2.5rem]
				md:text-md-h2 md:leading-[3rem]
				lg:text-lg-h2 lg:leading-[4rem]				
				">
					Personnalisez vos informations en toute liberté
				</h2>
				<p className="text-sm-p font-regular
				
				md:text-p
				">
					Ajoutez vos coordonnées, votre biographie, des liens, des fichiers (PDF, images…), 
					un logo, une photo de profil et bien plus encore. L’interface fluide vous permet de 
					structurer un profil professionnel soigné, clair et moderne.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

						
			<picture className=" min-w-[16rem] border w-[28rem]" >
				<img src="./images/profile_update.png" alt="" />
			</picture>

		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">
			
			<picture className=" min-w-[16rem] border w-[28rem]" >
				<img src="./images/share_illustration.png" alt="" />
			</picture>

			<div className="flex flex-col h-fit  gap-[1rem]  w-[40rem]">
				<p className="text-tagline font-bold">
					3. Un lien intelligent pour une diffusion sans friction.
				</p>
				<h2 className=" text-sm-h2 font-bold leading-[2.5rem]
				md:text-md-h2 md:leading-[3rem]
				lg:text-lg-h2 lg:leading-[4rem]				
				">
					Partagez votre profil comme vous le souhaitez
				</h2>
				<p className="text-sm-p font-regular
				
				md:text-p
				">
					Chaque profil génère automatiquement un lien public sécurisé. Partagez-le par e-mail, 
					via un QR code ou dans vos conversations (WhatsApp, LinkedIn, Slack…). Offrez un 
					accès rapide et contrôlé à vos informations clés.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

		</section>

		<section className="flex flex-wrap flex-col gap-[2rem] items-center py-[3rem] px-[2rem]">

			<h2 className="text-center text-sm-h2 font-bold leading-[2.5rem]
				md:text-md-h2 md:leading-[3rem]
				lg:text-lg-h2 lg:leading-[4rem]				
				">
				Passez au digital sans complexité
			</h2>

			<p className="text-sm-p text-center max-w-[42rem] font-regular
				md:text-p
			">
				Valorisez votre image professionnelle avec une solution élégante, fluide 
				et toujours disponible. Simplifiez vos échanges et renforcez votre impact 
				dès le premier contact.
			</p>

			<Link to="/register ">
				<Button>Commencer</Button>
			</Link>

		</section>

    <Footer />
		</>
	)
};

export default Home;