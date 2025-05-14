

import Header from "../components/header";


const SuccessfulLogin = () => {

	return (
		<>
			<Header />

			<section className="flex items-center p-[2rem] flex-col gap-[2rem]">

				<div>
					<p className="text-p text-center w-[32rem]">
						Inscription
						<span className="ml-1 text-primary-green font-medium">
							 réussie !
						</span>
					</p>
					<p className="text-p text-center">
						Veuillez vous reconnecter !
					</p>
				</div>
					
				<picture className=" w-[24rem]" >
					<img src="./images/successful_registration.png" alt="" />
				</picture>

			</section>

		</>
	)
};

export default SuccessfulLogin;