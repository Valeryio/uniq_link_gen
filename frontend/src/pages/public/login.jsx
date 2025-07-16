
import { Link, useNavigate } from "react-router";
import FormInput from "../../components/ui/input";
import Header from "../../components/header";
import { useState, useEffect } from "react";
import Button from "../../components/ui/button";
import inputValidators from "../../components/helpers/validators";
import useAuth from "@/hooks/useAuth";
import ModalParent from "@/components/modalParent";


/**
 * @component Login
 * @description - This component manage the login to the backend through
 * 							a secured form.
 * 							It valids user entries, before the submission and show
 * 							alert in case of errors.
 */

const Login = () => {

	const navigate = useNavigate();
	const { login } = useAuth();

	const [loginErrorMessages, setLoginErrorMessages] = useState("");

	/**
	 * show - Boolean variable to set the state of the pop up. Open or 
	 * not.
	 */
	const [show, setShow] = useState(false);

	/**
	 * close - Boolean variable to set the state of the pop up. Open or 
	 * not. It's an intern control variable for the pop up!
	 */
	const [close, setClose] = useState(false);


	/**
	 * @function openPopUp
	 * @description - Open the popUp from the pop up by changing the value
	 * 							of - show (variable) - to true
	 */
	const openPopUp = () => {
		setShow(!show);
	};

  /**
	 * @function closePopUp
	 * @description - Close the popUp from the pop up by changing the value
	 * 							of - show (variable) - to false
	 */
	const closePopUp = () => {
		setShow(false);
		navigate("/app/home");
	};

	/**
	 * disabled - Boolean state to enable or disable the submit button
	 */
	const [disabled, setDisabled] = useState(true);

	/**
	 * errorMessage - Store the error message for each input component
	 */
	const [errorMessage, setErrorMessage] = useState({
		email: "",
		password: ""
	});

	/**
	 * validated - Store the validation state of each input of the form
	 */
	const [validated, setValidated] = useState({
		email: null,
		password: null
	});

	/**
	 * formData - contains all the data of each input field
	 */
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	useEffect(() => {
		let formIsValid = true;
		for (const key in validated) {
			if (!validated[key]) {
				formIsValid = false;
			}
		}
	
	/**
	 * @argument
	 * false for the validation ~ means ~ true for the disabled 
	 * state of the button
	 * 
	 * If one of the form input are not valid, then, all the form
	 * is invalid and the submit button is disabled!
	 */
  setDisabled(!formIsValid);
}, [validated]);

	/**
	 * @function handleChange
	 * @description - Update formData, validate input changes and update
	 * 							error messages
	 * @param {*} e - event object of javascript
	 */
	const handleChange = (e) => {
		const {name, value} = e.target;
		const inputValidator = inputValidators.find((validator) => 
			validator.type === e.target.name);
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

	/**
	 * @function handleSubmit
	 * @description - POST the form by calling the backend API
	 * @param {*} e 
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let response = await fetch(`http://${import.meta.env.VITE_BACKEND_API}/users/login`, {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(formData),
				credentials: "include"
			});

			// const token = response.headers["token"];
			// console.log(response.headers["Authorization"]);

			response = await response.json();
				// console.log(response);
			if (response.success) {
				login(response.data);
				navigate("/app/home");
			} else {
				// console.log(response.data);
				setLoginErrorMessages("Vous avez entré un mot de passe qui est incorrect !");
				openPopUp();
			}

		} catch (err) {
			// console.error(`Error while getting the user : ${err}`);
			setLoginErrorMessages(" Difficultés a recevoir les données de l'utilisateur ! Réessayez ultérieurement !")
			openPopUp();
			return err;
		}
	};

	return (
		<>
			<Header type="secondary" />

			<section className=" p-[2rem] h-full gap-[2rem] flex justify-center" >

				<form action="" className="w-[24rem] hover:shadow-lg border border-lightest-purple flex flex-col gap-[1rem] 
					px-[2rem] py-[2rem] rounded-[8px] h-fit ">

					<div className="flex flex-col gap-[.5rem]">
						<h2 className="font-semibold text-sm-h1 text-center
						leading-[2.5rem]
				
						md:text-md-h1 md:leading-[3rem]
						lg:text-lg-h1 lg:leading-[4rem]
						">
							Connexion
						</h2>
						<p className="font-medium text-sm-p text-center font-regular
							md:text-p md:text-left
						">
							Connexion sécurisée à votre espace utilisateur.
						</p>
					</div>

					<FormInput inputType="email" label="Email" required={true} name="email" validated={validated.email}
					onChange={handleChange} errorMessage={errorMessage.email} value={formData.email} extralabel="" />

					<FormInput inputType="password" label="Mot de passe" required={true} name="password" validated={validated.password}
					value={formData.password} extralabel="Mot de passe oublié ?" errorMessage={errorMessage.password} 
					onChange={handleChange}/>

					<Button size="large" disabled={disabled} type="submit" onClick={handleSubmit} >Connexion</Button>
					<Button size="large" styleType="secondary" type="submit" >Connexion avec Google</Button>

					<p className="text-[.9rem] text-center
						md:text-left
					" >
						Vous n'avez pas de compte ?			
						<Link to="/register"  className="text-primary-purple underline ml-[.2rem]">
							Inscription
						</Link>
					</p>

				</form>

				<div className=" hidden w-[30rem]

					md:block
				" >
					<img src="./images/login.png" alt="" />
				</div>

			</section>

			<ModalParent show={show} onClose={closePopUp} >
				<div className=" flex flex-col gap-[1rem] items-center 
				p-[1rem] " >

						<p className=" text-center "
						>
							{loginErrorMessages}
						</p>

						<Button onClick={closePopUp} > Fermer </Button>
				</div>
			</ModalParent>



		</>
	)
};

export default Login;