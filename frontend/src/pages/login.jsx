
import { Link, useNavigate } from "react-router";
import Input from "../components/ui/input";
import { useState } from "react";
import Header from "../components/header";
import Button from "../components/ui/buttons";

const Login = () => {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value
		})
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

					
					<div className="flex flex-col gap-[.25rem]">
						<label htmlFor="email" className="text-[.9rem] font-medium" >Email
							<span className="text-primary-red"> *</span>

						</label>
						<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} 
						className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
					</div>

					<div className="flex flex-col gap-[.25rem]">
						<div className="flex justify-between" >
							<label htmlFor="password" className="text-[.9rem] font-medium" >Mot de passe 
								<span className="text-primary-red"> *</span>
								</label>
								<Link>
									<p className="text-[.9rem] font-regular text-primary-purple underline underline-offset-2" >
										Mot de passe oublié ?
									</p>
								</Link>
						</div>

						<input id="password" name="password" type="password" value={formData.password} onChange={handleChange} 
						className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
					</div>

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