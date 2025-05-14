
import { Link } from "react-router";

const Footer = () => {

	return (
		<footer
			className=" flex flex-col gap-[2rem] justify-center px-[2rem] py-[3rem] border border-lightest-purple m-auto max-w-[88rem]
			bottom-0"
		>

			<div className="flex justify-between px-[2rem]" >
        <Link to="/" className="w-[8rem]">
            <img src="./logo.svg" alt="" />
        </Link>

      	<nav className="">
      	    <ul className="flex items-center gap-[1rem]">
      	        <li className=" hover:text-primary-purple hover:font-medium "> 
      	            <Link to="/" >Accueil</Link>
      	        </li>
      	        <li className=" hover:text-primary-purple hover:font-medium ">
      	            <Link to="/about" >À propos</Link>
      	        </li>
      	        <li className=" hover:text-primary-purple hover:font-medium ">
      	            <Link to="/contact" >Contact</Link>
      	        </li>
      	    </ul>
      	</nav>

				<div className="flex justify-center gap-[1rem]">
					<img src="./icons/Facebook.svg" alt="the facebook icon" />
					<img src="./icons/Instagram.svg" alt="the instagram icon" />
					<img src="./icons/X.svg" alt="the x icon" />
					<img src="./icons/LinkedIn.svg" alt="the linkedIn icon" />
					<img src="./icons/Youtube.svg" alt="the youtube icon" />
				</div>
			</div>
			
			<hr className=" border-medium-purple" />

			<div className="flex justify-center gap-[1rem]" >

				<p>
					Copyright &copy; All Right Reserved
				</p>
				
				<Link to="/" className="flex items-center">
					<p className="underline text-primary-purple" >
						Politique de confidentialité
					</p>
				</Link>
				<Link to="/" className="flex items-center">
					<p className="underline text-primary-purple" >
						Conditions d'utilisations
					</p>
				</Link>
			</div>

			
		</footer>
	)
};

export default Footer;