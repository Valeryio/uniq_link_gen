
import { Link, useNavigate } from "react-router";
import Input from "../components/ui/input";
import { useState } from "react";

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
		<section className=" p-[2rem] flex " >

			<form action="" className="border border-gray-200 flex flex-col gap-[1rem] w-[20rem]
				p-[2rem]">
				<h2>Login Page</h2>

				
				<div>
					<label htmlFor="email" className="text-[.9rem] font-medium" >Email</label>
					<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} 
					className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
				</div>

				<div>
					<label htmlFor="password" className="text-[.9rem] font-medium" >Mot de passe</label>
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
		</section>
	)
};

export default Login;