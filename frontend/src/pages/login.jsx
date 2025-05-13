
import { Link, useNavigate } from "react-router";
import Input from "../components/ui/input";
import { useState } from "react";
import Header from "../components/header";

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
			<section className=" p-[2rem] h-full gap-[2rem] flex justify-center " >

				<form action="" className=" w-[24rem] border border-gray-200 flex flex-col gap-[1rem] 
					p-[2rem]">
						<div className="flex flex-col gap-[.5rem]">
							<h2 className="font-semibold text-[40px] text-center">
								Connexion
							</h2>
							<p className=" text-[15px] font-medium">
								Connexion sécurisée à votre espace utilisateur.
							</p>
						</div>

					
					<div>
						<label htmlFor="email" className="text-[.9rem] font-medium" >Email
							<span className="text-primary-red"> *</span>

						</label>
						<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} 
						className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
					</div>

					<div>
						<div className="flex justify-between" >
							<label htmlFor="password" className="text-[.9rem] font-medium" >Mot de passe 
								<span className="text-primary-red"> *</span>
								</label>
								<Link>
									<p className="text-[.9rem] font-regular text-primary-purple underline-offset-2" >
										Mot de passe oublié ?
									</p>
								</Link>
						</div>

						<input id="password" name="password" type="password" value={formData.password} onChange={handleChange} 
						className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
					</div>
					{ /** 
					<Input type="email" label="Email" />
					<Input type="password" label="Password" /> */}

					<p className="text-[.9rem]" >
						Vous n'avez pas de compte ?			
						<Link to="/register" className="text-blue-600 underline ml-[.2rem]">
							Inscription
						</Link>
					</p>

					<button onClick={handleSubmit} 
					className="border w-fit text-[.9rem] cursor-pointer hover:bg-amber-400 px-[1.5rem] py-[.6rem] rounded-[.4rem]" >
						Connexion
					</button>

				</form>

				<div className=" border w-[30rem]" >
					<img src="./images/login.png" alt="" />
				</div>

			</section>
		</>
	)
};

export default Login;