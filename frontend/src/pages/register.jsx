
import Input from "../components/ui/input";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Button from "../components/ui/button";
import FormInput from "../components/ui/input";
import { Link, useNavigate } from "react-router";
import StepLoader from "../components/stepLoader";
import inputValidators from "../components/helpers/validators";


const RegisterFirstStep = ({formData, validated, handleChange, errorMessages}) => {

	useEffect(() => {
	console.log("I got it here : ", formData);
	});

	return (
		<>
			<StepLoader />

			<div className="border border-gray-200  flex flex-col gap-[1rem] w-[20rem]">
				<div className="flex flex-col gap-[.5rem]">
					<h2 className="font-bold text-[27px]">
						Commençons avec votre nom et votre mail !
					</h2>
					<p className=" text-[15px] font-medium text-dark-purple">
						Au fur et à mesure que vous remplirez le formulaire, vos 
						coordonnées seront sauvegardées !
					</p>
				</div>
				
			<FormInput label="Entrez votre nom" required={true} type="text" name="name" validated={validated.name}
			id="name" value={formData.name} onChange={handleChange} />

			<FormInput label="Entrez votre mail" required={true} type="email" validated={validated.email} id="email"
			value={formData.email} onChange={handleChange} name="email" />

		</div>
		</>
	)
};

const RegisterSecondStep = ({formData, validated, handleChange, errorMessages}) => {


	return (
		<>
			<StepLoader step={2} />
			<div className="border border-gray-200  flex flex-col gap-[1rem] w-[20rem]">

			<div className="flex flex-col gap-[.5rem]">
				<h2 className="font-bold text-[27px]">
					Sécurisez votre compte !
				</h2>
				<p className=" text-[15px] font-medium text-dark-purple">
					Entrez votre mot de passe, et reconfirmez le 
					pour assurer la sécurité du profil.
				</p>
			</div>

			<FormInput label="Entrez votre mot de passe" required={true} name="password" type="password"
			id="password" value={formData.password} validated={validated.retypedPassword}	
			onChange={handleChange} />

			<FormInput label="Reconfirmez votre mot de passe" required={true} name="retypedPassword" type="password"
			id="retypedPassword" value={formData.retypedPassword} validated={validated.retypedPassword}	
			onChange={handleChange} />
			</div>
		</>

	)
};

const RegisterThirdStep = ({formData, validated, errorMessages, handleChange}) => {

	return (
		<>
			<StepLoader step={3} />
			<div className="border border-gray-200  flex flex-col gap-[1rem] w-[20rem]">
				<div className="flex flex-col gap-[.5rem]">
					<h2 className="font-bold text-[27px]">
						Comment vous joindre ?
					</h2>
					<p className=" text-[15px] font-medium text-dark-purple">
						Passez votre numéro le plus actif, ainsi que votre pays de 
						résidence !
					</p>
				</div>

				<FormInput label="Quel est votre pays de résidence ?" required={true} name="country" />
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
		</>
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

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		retypedPassword: ""
	});

	const [validated, setValidated] = useState({
		name: false,
		email: false,
		password: false,
		retypedPassword: false
	});

	// This is the dynamic component rendered inside the 
	// form to update the ui rendering of the step
	const StepComponent = steps[stepCounter].formStep;

	/**
	 * @function setStepBaclward
	 * @description - Update the state of the form to the previous
	 * 							step of completion
	 * @return value - a number
	 */
	const setStepBackward = () => {
		setStepCounter((prev) => {
				if (prev - 1 < 0) { return (prev); }
			return (prev - 1);
		});
	};
	
	/**
	 * @function setStepForward
	 * @description - Update the state of the form to the next
	 * 							step of completion
	 * @return value - a number
	 */
	const setStepForward = () => {
		setStepCounter((prev) => {
			if (prev + 1 > 2) { return (prev); }
			return (prev + 1);
		});
	};

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

	
	console.log("THE FORM DATA : ", formData);

	return (
		<>		
			<Header type="secondary" />
			<section className=" p-[2rem] flex border justify-center gap-[2rem]" >

			<form action=""className="border border-gray-200  flex flex-col gap-[1rem]
			p-[2rem]">

				<StepComponent formData={formData} validated={validated} handleChange={handleChange} />

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

export default Register;