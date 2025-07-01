
import Button from "../../components/ui/button";
import { Link } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";


const About = () => {
	
	return (
		<>
    <Header />
		
		<section className="flex items-center gap-[2rem] px-[2rem] py-[3rem]">

			<div className="flex flex-col h-fit gap-[1rem] w-[33rem]">

				<div className=" ">
					<p className="text-tagline font-bold">
						Qui sommes-nous ?
					</p>

					<h1 className="text-h2 font-bold">
						À propos de nous
					</h1>
					<p className="text-p font-regular max-w-[33rem]">
						Dans un monde où les connexions sont de plus en plus 
						numériques, les cartes de visite papier ne suffisent plus.
						<br /><br />
						Que vous soyez entrepreneur, freelance, étudiant, ou 
						recruteur, vous avez besoin d’un moyen moderne de présenter 
						vos informations — et surtout, de les garder à jour.
						<br />
						<br />
						Ce projet est né d’un constat simple : il fallait un outil 
						intuitif, design, et accessible à tous. Sans application à 
						télécharger. Sans complication. Juste un lien.
					</p>
				</div>
			</div>

		</section>

		<Footer />
		</>
	)
};

export default About;