
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router";
import Button from "../components/ui/button";
import { useState } from "react";


const Contact = () => {

	const [formData, setFormData] = useState({
		"Nom": "",
		"email": "",
	});


	const handleChange = () => {

	};

	const handleSubmit = () => {

	};


	return (
		<>
    <Header />
		
		<section className="flex items-center gap-[2rem] px-[2rem] py-[3rem]">

			<div className="flex flex-col h-fit gap-[1rem] w-[33rem]">

				<div className=" ">
					<p className="text-tagline font-bold">
						1. Vos cartes business, repensées pour l’ère numérique.
					</p>

					<h1 className="text-h2 font-bold">
						Contactez-nous !
					</h1>
					<p className="text-p font-regular max-w-[33rem]">
						Une question, une suggestion ou simplement envie 
						d'échanger ?
						<br />
						Notre équipe est à votre écoute !
						Remplissez le formulaire ou écrivez-nous directement : 
						nous vous répondrons dans les plus brefs délais.
					</p>
				</div>

				<form action="" className=" w-[32rem] border-lightest-purple flex flex-col gap-[1rem] 
					 py-[1rem] rounded-[8px] ">

						<div className="flex flex-col gap-[.25rem]">
							<div className="flex justify-between" >
								<label htmlFor="name" className="text-[.9rem] font-medium" >Nom 
									<span className="text-primary-red"> *</span>
								</label>
							</div>

							<input id="text" name="name" type="password" value={formData.name} onChange={handleChange} 
							className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
						</div>
												
						<div className="flex flex-col gap-[.25rem]">
							<label htmlFor="email" className="text-[.9rem] font-medium" >Email
								<span className="text-primary-red"> *</span>

							</label>
							<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} 
							className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
						</div>

						<div className="flex flex-col gap-[.25rem]">
							<div className="flex justify-between" >
								<label htmlFor="message" className="text-[.9rem] font-medium" >Message 
									<span className="text-primary-red"> *</span>
								</label>
							</div>

							<textarea name="" id="" placeholder="Entrez votre message..."
								className="border resize-none h-[8rem] px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" >
							</textarea>
					
						</div>

						<Button size="" type="submit" onClick={handleSubmit} >Envoyer</Button>

				</form>
			</div>

			<picture className=" w-[40rem]" >
				<img src="./images/login.png" alt="" />
			</picture>


		</section>

		<Footer />
		</>
	)
};

export default Contact;