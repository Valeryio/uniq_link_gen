
import Button from "./ui/buttons";
import { Link } from "react-router";

const PrimaryHeader = () => {
    return (
        <header className=" m-auto max-w-[88rem] flex justify-between items-center py-[1rem] px-[2rem] border border-light-purple " >
            <div className="flex items-center gap-[2rem]">
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
            </div>

            <div className="flex items-center gap-[2rem]">
                <Link to="/login" >
                    <Button styleType="secondary" >Connexion</Button>
                </Link>
                <Link to="/register" >
                    <Button>Inscription</Button>
                </Link>
            </div>
		</header>
    )  
};

/**
 * @function SecondaryHeader
 * @description This is the secondary react header
 * @returns 
 */
const SecondaryHeader = () => {
    return (
        <header className="flex justify-center items-center py-[1.5rem] px-[2rem] border border-light-purple">
            <Link to="/" className="w-[8rem]">
                <img src="./logo.svg" alt="" />
            </Link>
        </header>
    )
};

const Header = ({type}) => {

    switch(type) {
        case "secondary":
            return <SecondaryHeader />
        break;

        default:
            return <PrimaryHeader />
    }
};

export default Header;