
import Button from "./ui/button";
import { Link } from "react-router";

const PrimaryHeader = () => {
    return (
        <header className=" m-auto max-w-[88rem] flex justify-between items-center py-[1rem] px-[2rem] border border-light-purple " >
            <div className="flex items-center gap-[2rem]">
                <Link to="/" className="w-[8rem]">
                    <img src="./logo.svg" alt="" />
                </Link>
            </div>

            <nav className=" hidden
            
            sm:block ">
                <ul className="flex flex-wrap items-center gap-[1rem]">
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

            <div className=" hidden 
            
                sm:flex flex-wrap items-center gap-[2rem]">
                <Link to="/login" >
                    <Button styleType="secondary" >Connexion</Button>
                </Link>
                <Link to="/register" >
                    <Button>Inscription</Button>
                </Link>
            </div>

            <div className="flex gap-[2rem] items-center max-w-[16rem] px-1 
            
            sm:hidden 
            " >
              <a className="flex gap-[1rem] cursor-pointer " >

                <img src="/icons/menu.svg" alt="" />
              </a>
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
        <header className="flex justify-center items-center w-full h-fit py-[1.5rem] px-[2rem] border border-light-purple">
            <Link to="/" className="w-[8rem]">
                <img src="../logo.svg" alt="" />
            </Link>
        </header>
    )
};

const LoggedHeader = ({data}) => {

    return (
        <header className="flex bg-white justify-between items-center w-full h-fit py-[1.5rem] px-[2rem] border border-light-purple">
            <Link to="/app" className="w-[8rem]">
                <img src="/logo.svg" alt="" />
            </Link>
            <div className="flex gap-[2rem] items-center max-w-[16rem] border px-1 " >

                <div >
                    <Link to="/app/user" className="flex gap-[1rem] items-center ">
                        <img src="../images/avatar.png" alt="" />
                        <p>{ data && `${data.name}` || "John Doe"} </p>
                        <img src="/icons/chevron-down.svg" alt="" />
                    </Link>

                </div>
                
            </div>
        </header>
    )
}


const Header = ({type, data}) => {

    switch(type) {
        case "secondary":
            return <SecondaryHeader />

        case "logged":
            return <LoggedHeader data={data} />

        default:
            return <PrimaryHeader />
    }
};

export default Header;