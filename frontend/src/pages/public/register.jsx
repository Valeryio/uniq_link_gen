

import { useEffect, useState } from "react";
import Header from "../../components/header";
import Button from "../../components/ui/button";
import FormInput from "../../components/ui/input";
import { Link, useNavigate } from "react-router";
import StepLoader from "../../components/stepLoader";
import FormSelect from "../../components/ui/select";
import inputValidators from "../../components/helpers/validators";



const RegisterFirstStep = ({formData, validated, handleChange, errorMessages}) => {

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
			id="name" value={formData.name} errorMessage={errorMessages.name} onChange={handleChange} />

			<FormInput label="Entrez votre mail" required={true} type="email" validated={validated.email} id="email"
			value={formData.email} errorMessage={errorMessages.email} onChange={handleChange} name="email" />

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

			<FormInput label="Entrez votre mot de passe" required={true} name="password" inputType="password"
			id="password" value={formData.password} errorMessage={errorMessages.password} validated={validated.password}	
			onChange={handleChange} />

			<FormInput label="Reconfirmez votre mot de passe" required={true} name="retypedPassword" inputType="password"
			id="retypedPassword" value={formData.retypedPassword} errorMessage={errorMessages.retypedPassword}
			 validated={validated.retypedPassword} onChange={handleChange} />
			</div>
		</>

	)
};

const RegisterThirdStep = ({formData, validated, errorMessages, handleChange, handleSelect}) => {

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
					<FormSelect label={"Quel est votre pays de résidence ?"} name="country" formData={formData} onChange={handleSelect} required={true}  />
					<FormInput label={"Quel est votre numéro de téléphone ?"} required={true} onChange={handleChange}
						name={"phone"} value={formData.phone} validated={validated.phone} errorMessage={errorMessages.phone}
						updatedType="tel" />
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

	const [disabled, setDisabled] = useState(true);
	const [stepCounter, setStepCounter] = useState(0);

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		retypedPassword: "",
		country: "",
		phone: ""
	});

	const [validated, setValidated] = useState({
		name: false,
		email: false,
		password: false,
		retypedPassword: false,
		phone: false
	});

	const [errorMessages, setErrorMessages] = useState({
		name: "",
		email: "",
		password: "",
		retypedPassword: "",
		phone: ""
	});

	useEffect(() => {
		let isFormValid = true;
			for (const key in validated) {
			if (!validated[key]) {
				isFormValid = false;
			}
		}
		setDisabled(!isFormValid);
	}, [validated])

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

		// find the right validator for the current input
		const inputValidator = inputValidators.find((validator) => 
		validator.type === e.target.name);
	
		let validationResult = false;
		if (inputValidator.type === "retypedPassword") {
			validationResult = inputValidator
			.validator(formData.password, value);
		} else {
			validationResult = inputValidator.validator(value);
		}

		if(validationResult) {
			setValidated({
				...validated,
				[name]: true
			});

			setErrorMessages({
				...errorMessages,
				[name]: ""
			});
		} else {
			setValidated({
				...validated,
				[name]: false
			})

			setErrorMessages({
				...errorMessages,
				[name]: inputValidator.errorMessage
			});
		};

		setFormData({
				...formData,
			[name]: value
		});

		console.log("We have : ", e.target.name);

		console.log("This is the formData : ", formData);
	}

	const handleSelect = (e) => {
		
		const {name, value} = e.target;
				setFormData({
				...formData,
			[name]: value
		});
		console.log("This is the select formData : ", formData);
	}


	const handleSubmit = async (e) => {
		e.preventDefault();

		const registerInfo = {
			name: formData.name,
			email: formData.email,
			password: formData.password,
			country: formData.country,
			phone: formData.phone
		};

		console.log("This is the formData : ", formData);

		try {
			let response = await fetch(`http://${import.meta.env.VITE_BACKEND_API}/users/register`,
				{
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(registerInfo)
				}
			);

			
			if (response.status === 200) {
				navigate("/successfullSignUp");
			} else {
				const result = await response.json();
				alert(`Failed : ${result.message}`);
				navigate("/register");
			}
	

		} catch(err) {
			console.log(`Error while registering the new user : ${err}`);
			return (`Error while registering the new user : ${err}`);
		}
	};
	
	// This is the dynamic component rendered inside the 
	// form to update the ui rendering of the step
	const StepComponent = steps[stepCounter].formStep;

	return (
		<>
			<Header type="secondary" />

			<section className=" p-[2rem] flex border justify-center gap-[2rem]" >

			<form action=""className="border border-gray-200  flex flex-col gap-[1rem]
			p-[2rem]">

				<StepComponent formData={formData} errorMessages={errorMessages} handleSelect={handleSelect} validated={validated} handleChange={handleChange} />

				<div className="flex justify-between">
					<Button size="" styleType="secondary" type="button" onClick={setStepBackward} >Retour</Button>
					{stepCounter < 2 && <Button size="" type="button" onClick={setStepForward} >Continuer</Button>}
					
					{stepCounter === 2 && 
					<Button size="" type="submit" className="hidden" onClick={handleSubmit} disabled={disabled}>
						Inscription
					</Button>}
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