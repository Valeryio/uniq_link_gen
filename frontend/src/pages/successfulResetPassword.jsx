

import Header from "../components/header";


const SuccessfulResetPassword = () => {

	return (
		<>
			<Header />

			<section className="flex items-center p-[2rem] flex-col gap-[2rem]">

				<div>
					<p className="text-p text-center w-[32rem]">
						Votre mot de passe a été réinitialisé avec
						<span className="ml-1 text-primary-green font-medium">
							succès!
						</span>
					</p>
					<p className="text-p text-center">
						Veuillez vous reconnecter !
					</p>
				</div>
					
				<picture className=" w-[24rem]" >
					<img src="./images/confirmed_reset.png" alt="" />
				</picture>

			</section>

		</>
	)
};

export default SuccessfulResetPassword;