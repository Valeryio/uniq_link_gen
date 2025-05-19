
import Input from "../components/ui/input";
import { useState } from "react";
import Header from "../components/header";
import Button from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import StepLoader from "../components/stepLoader";
import React from "react";


const RegisterFirstStep = () => {

	let formData = {};

	let handleChange = () => {

	};

	let handleSubmit = () => {
		
	};

	return (
		<div className="border border-gray-200  flex flex-col gap-[1rem] w-[22rem]">
			<div className="flex flex-col gap-[.5rem]">
				<h2 className="font-bold text-[27px]">
					Commençons avec votre nom et votre mail !
				</h2>
				<p className=" text-[15px] font-medium text-dark-purple">
					Au fur et à mesure que vous remplirez le formulaire, vos 
					coordonnées seront sauvegardées !
				</p>
			</div>
			<div>
				<label htmlFor="name" className="text-[.9rem] font-medium" >
					Entrez votre nom
					<span className="text-primary-red"> *</span>
				</label>
				<input id="name" required name="name" type="text" value={formData.name} onChange={handleChange}
					className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
			<div>
					<label htmlFor="email" className="text-[.9rem] font-medium" >
					Entrez votre mail
					<span className="text-primary-red"> *</span>
				</label>
				<input id="email" required name="email" type="email" value={formData.email} onChange={handleChange} 
				className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
		</div>
	)
};

const RegisterSecondStep = () => {

	let formData = {};

	let handleChange = () => {

	};

	let handleSubmit = () => {
		
	};

	return (
		<div className="border border-gray-200  flex flex-col gap-[1rem] w-[24rem]
		p-[2rem]">

			<div className="flex flex-col gap-[.5rem]">
				<h2 className="font-bold text-[27px]">
					Sécurisez votre compte !
				</h2>
				<p className=" text-[15px] font-medium text-dark-purple">
					Entrez votre mot de passe, et reconfirmez le 
					pour assurer la sécurité du profil.
				</p>
			</div>

		<div>
			<label htmlFor="password" className="text-[.9rem] font-medium" >
				Entrez votre mot de passe
				<span className="text-primary-red"> *</span>
			</label>
			<input id="password" required name="password" type="password" value={formData.password} onChange={handleChange} 
			className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
		<div>
			<label htmlFor="password" className="text-[.9rem] font-medium" >
				Reconfirmez votre mot de passe
				<span className="text-primary-red">*</span>
			</label>
			<input id="password" required name="password" type="password" value={formData.password} onChange={handleChange} 
			className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
		</div>
	)
};

const RegisterThirdStep = () => {

	let formData = {};

	let handleChange = () => {

	};

	let handleSubmit = () => {
		
	};

	return (
		<div className="border border-gray-200  flex flex-col gap-[1rem] w-[24rem]
		p-[2rem]">
			<div className="flex flex-col gap-[.5rem]">
				<h2 className="font-bold text-[27px]">
					Comment vous joindre ?
				</h2>
				<p className=" text-[15px] font-medium text-dark-purple">
					Passez votre numéro le plus actif, ainsi que votre pays de 
					résidence !
				</p>
			</div>

			<div>
				<label htmlFor="name" className="text-[.9rem] font-medium" >
					Quel est votre pays de résidence ?
					<span className="text-primary-red"> *</span>
				</label>
				<input id="name" required name="name" type="text" value={formData.name} onChange={handleChange}
					className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
			<div>
				<label htmlFor="email" className="text-[.9rem] font-medium" >
					Quel est votre numéro de téléphone ?
					<span className="text-primary-red"> *</span>
				</label>
				<input id="email" required name="email" type="email" value={formData.email} onChange={handleChange} 
				className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
			</div>
	</div>
	)
};

	const steps = [
		{
			step: "1",
			formStep: RegisterFirstStep
		},
		{
			step: "2",
			formStep: RegisterSecondStep
		},
		{
			step: "3",
			formStep: RegisterThirdStep
		}
	];

const Register = () => {

	const [stepCounter, setStepCounter] = useState(0);

	const setStepBackward = () => {
		setStepCounter((prev) => {
				if (prev - 1 < 0) { return (prev); }
			return (prev - 1);
		});
	};

	const setStepForward = () => {
		setStepCounter((prev) => {
			if (prev + 1 > 2) { return (prev); }
			return (prev + 1);
		});
	};

	const StepComponent = steps[stepCounter].formStep;

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
				...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("This is the formData : ", formData);

		try {
			let response = await fetch("http://localhost:8080/users/register",
				{
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(formData)
				}
			);
	
			response = await response.json();
			console.log("The response : ", response);
		} catch(err) {
			console.log(`Error while registering the new user : ${err}`);
			return (`Error while registering the new user : ${err}`);
		}
	};

	return (
		<>		
			<Header type="secondary" />
			<section className=" p-[2rem] flex border justify-center gap-[2rem]" >

			<form action=""className="border border-gray-200  flex flex-col gap-[1rem]
			p-[2rem]">

				<StepLoader />

				<StepComponent />

				{/* {React.createElement(steps[stepCounter].formStep)} */}

				<div className="flex justify-between">
					<Button size="" styleType="secondary" type="submit" onClick={setStepBackward} >Retour</Button>
					{stepCounter < 2 && <Button size="" type="submit" onClick={setStepForward} >Continuer</Button>}
					
					{stepCounter === 2 && <Button size="" type="submit" className="hidden" onClick={handleSubmit} >Inscription</Button>}
				</div>
			</form>

				<div className=" w-[30rem]" >
					<img src="./images/login.png" alt="" />
				</div>
			</section>
		</>
	)
};

/*
const Register = () => {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: ""
	});

	const handleInput = (e) => {
		
		const {name, value} = e.target;
		setFormData({
			...formData,
		[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("This is the formData : ", formData);

		try {
			let response = await fetch("http://localhost:8080/users/register",
				{
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(formData)
				}
			);
	
			response = await response.json();
			console.log("The response : ", response);
		} catch(err) {
			console.log(`Error while registering the new user : ${err}`);
			return (`Error while registering the new user : ${err}`);
		}
	};

	return (
		<section className=" p-[2rem] flex " >
			<form action=""className="border border-gray-200 flex flex-col gap-[1rem] w-[20rem]
				p-[2rem]">
				<h2>Register Page</h2>

			<Input type="text" value={formData} label="Nom" name="name" changeHandler={handleInput} />
			<Input type="email" value={formData} label="Email" name="email" changeHandler={handleInput} />
			<Input type="password" value={formData} label="Mot de passe" name="password" changeHandler={handleInput} />

			<p className="text-[.9rem]" >
					Déjà un compte ? 			
					<Link to="/login" className=" text-blue-600 underline ml-[.2rem]">
						Inscription
					</Link>
				</p>

			<button onClick={handleSubmit}
			className="border w-fit text-[.9rem] cursor-pointer hover:bg-amber-400 px-[1.5rem] py-[.6rem] rounded-[.4rem]" >
				<Link to="/login" > Inscription </Link>
			</button>
			</form>
		</section>
	)
};
*/

export default Register;