
import { Link, useNavigate } from "react-router";
import FormInput from "../components/ui/input";
import Header from "../components/header";
import { useState } from "react";
import Button from "../components/ui/buttons";


const isValidEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

const isValidPassword = (password) => {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{3,15}$/;
	return passwordRegex.test(password);
};

const isValidName = (name) => {
	name = name.trim();
	if (!name) {
		return false;
	}
	return true;
};

const inputValidators = [
	{
		type: "name",
		validator: isValidName,
		errorMessage: "Le nom ne peut pas être vide",
	},
	{
		type: "email",
		validator: isValidEmail,
		errorMessage: "L'email n'est pas valide",
	},
	{
		type: "password",
		validator: isValidPassword,
		errorMessage: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial !",
	},
];


const Login = () => {

	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState({
		email: "",
		password: ""
	});

	const [validated, setValidated] = useState({
		email: false,
		password: false
	});

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		const inputValidator = inputValidators.filter((validator) => 
			validator.type === e.target.type)[0];

		
		setFormData({
			...formData,
			[name]: value
		});

		if(inputValidator.validator(value))
		{
			setValidated({
				...validated,
				[name]: true
			});

			setErrorMessage({
				...errorMessage,
				[name]: ""
			});
		} else {
			
			setValidated({
				...validated,
				[name]: false
			});

			setErrorMessage({
				...errorMessage,
				[name]: inputValidator.errorMessage
			});
		}

	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let response = await fetch("http://localhost:8080/users/login", {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			const token = response.headers["token"];
			console.log(response.headers["Authorization"]);

			response = await response.json();
			console.log(response);


		} catch (err) {
			console.error(`Error while getting the user : ${err}`);
			return err;
		}
	}

	return (
		<>
			<Header type="secondary" />
			<section className=" p-[2rem] h-full gap-[2rem] flex justify-center" >

				<form action="" className=" w-[24rem] hover:shadow-lg border border-lightest-purple flex flex-col gap-[1rem] 
					px-[2rem] p-[1rem] rounded-[8px] ">

					<div className="flex flex-col gap-[.5rem]">
						<h2 className="font-semibold text-[40px] text-center">
							Connexion
						</h2>
						<p className=" text-[15px] font-medium">
							Connexion sécurisée à votre espace utilisateur.
						</p>
					</div>

					<FormInput type="email" label="Email" required={true} name="email" validated={validated.email}
					onChange={handleChange} errorMessage={errorMessage.email} value={formData.email} extralabel="" />

					<FormInput type="password"  label="Mot de passe" required={true} name="password" validated={validated.password}
					value={formData.password} extralabel="Mot de passe oublié ?" errorMessage={errorMessage.password} 
					onChange={handleChange}/>

					<Button size="large" type="submit" onClick={handleSubmit} >Connexion</Button>
					<Button size="large" styleType="secondary" type="submit" >Connexion avec Google</Button>

					<p className="text-[.9rem]" >
						Vous n'avez pas de compte ?			
						<Link to="/register" className="text-primary-purple underline ml-[.2rem]">
							Inscription
						</Link>
					</p>

				</form>

				<div className=" w-[30rem]" >
					<img src="./images/login.png" alt="" />
				</div>

			</section>
		</>
	)
};

export default Login;