
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router";
import Button from "../components/ui/buttons";

const Home = () => {
	return (
		<>
    <Header />

		<section className="flex justify-center gap-[2rem] px-[2rem] py-[3rem]">
			<div className="flex flex-col gap-[1rem] w-[40rem]">
				<h1 className="text-h1 font-bold">
					Vos cartes business, repensées pour l’ère numérique.
				</h1>
				<p className="text-p font-regular">
					Centralisez vos informations professionnelles dans une 
					carte digitale claire, personnalisable et facile à partager.
					 Offrez une première impression mémorable, accessible en un 
					 simple lien.
				</p>

				<Button>Commencer</Button>
			</div>

			<picture>
				<img src="./images/1.png" alt="" />
			</picture>
		</section>

		<section className="flex justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">
			
			<picture className=" w-[28rem]" >
				<img src="./images/login.png" alt="" />
			</picture>

			<div className="flex flex-col h-fit gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					1. Vos cartes business, repensées pour l’ère numérique.
				</p>
				<h2 className="text-h2 font-bold">
					Inscrivez-vous en quelques secondes...
				</h2>
				<p className="text-p font-regular">
					Créez votre compte en utilisant votre adresse e-mail 
					professionnelle. Notre système d’authentification garantit 
					la sécurité de vos données, tout en vous offrant un accès 
					instantané à votre compte, et à la carte de base.
				</p>

				<Button>Commencer</Button>
			</div>

		</section>

		<section className="flex justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">

			<div className="flex flex-col h-fit  gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					2. Une carte professionnelle, à votre image.
				</p>
				<h2 className="text-h2 font-bold">
					Créez et personnalisez votre carte !
				</h2>
				<p className="text-p font-regular">
					Renseignez facilement vos informations : nom, 
					poste, entreprise, bio, coordonnées, liens sociaux, 
					logo, photo ou encore fichiers à télécharger (PDF, images…). Vous 
					bénéficiez d’une interface moderne et fluide pour structurer une 
					carte élégante, claire et impactante.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

						
			<picture className=" w-[28rem]" >
				<img src="./images/profile_update.png" alt="" />
			</picture>

		</section>

		<section className="flex justify-center items-center gap-[2rem] px-[2rem] py-[3rem]">
			
			<picture className=" w-[28rem]" >
				<img src="./images/share_illustration.png" alt="" />
			</picture>

			<div className="flex flex-col h-fit  gap-[1rem]  w-[40rem]">
				<p className="text-tagline font-bold">
					3. Un lien intelligent pour une diffusion sans friction.
				</p>
				<h2 className="text-h2 font-bold">
					Partagez votre carte avec un lien unique
				</h2>
				<p className="text-p font-regular">
					Chaque carte génère automatiquement une URL publique en lecture seule. 
					Partagez-la par e-mail, via un QR code, ou directement dans vos 
					conversations WhatsApp, LinkedIn ou Slack. Vous maîtrisez la diffusion 
					tout en garantissant un accès simple et immédiat à vos contacts.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

		</section>

		<section className="flex flex-col gap-[2rem] items-center py-[3rem] px-[2rem]">

			<h2 className="text-h2 text-center font-bold">
				Passez au digital sans complexité
			</h2>

			<p className="text-p text-center max-w-[42rem] font-regular">
				Démarquez-vous avec une carte business élégante, interactive 
				et toujours à portée de main. Votre image professionnelle 
				mérite mieux qu’un simple bout de papier.
			</p>

			<Button>Commencer</Button>

		</section>

    <Footer />
		</>
	)
};

export default Home;