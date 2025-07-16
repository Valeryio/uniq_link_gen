
import Button from "./ui/button";
import { Link } from "react-router";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import ModalParent from "./modalParent";

const PrimaryHeader = () => {

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
		setShow(false)
	};


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


          <ModalParent  show={show} onClose={closePopUp} >
            <ul className='w-full flex flex-col gap-[1rem] ' >
                <li className='border py-[1rem] px-[.5rem] ' >
                  <a href="" className=' text-center ' > Accueil </a>
                </li>
                <li className='border py-[1rem] px-[.5rem] ' >
                  <a href="" className=' text-center ' > Contact </a>
                </li>
                <li className='border py-[1rem] px-[.5rem] ' >
                  <a href="" className=' text-center ' > Partager </a>
                </li>
                <Link to="/login" >
                    <Button styleType="secondary" size="large" >Connexion</Button>
                </Link>
                <Link to="/register" >
                    <Button size="large" >Inscription</Button>
                </Link>
            </ul>
          </ModalParent>

            <div className=" hidden 
                sm:flex flex-wrap items-center gap-[2rem]">
                <Link to="/login" >
                    <Button styleType="secondary" >Connexion</Button>
                </Link>
                <Link to="/register" >
                    <Button>Inscription</Button>
                </Link>
            </div>

            <button className="flex sm:hidden gap-[1rem] cursor-pointer" 
            onClick={openPopUp} type="button" >
                <img src="/icons/menu.svg" alt="" />
            </button>

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
    
	const { logout } = useAuth();

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
		setShow(false)
	};

    return (
        <header className="flex bg-white justify-between items-center w-full h-fit py-[1.5rem] px-[2rem] border border-light-purple">
            <Link to="/app" className="w-[8rem]">
                <img src="/logo.svg" alt="" />
            </Link>

            <ModalParent  show={show} onClose={closePopUp} >
                <ul className='w-full flex flex-col gap-[1rem] ' >
                    <li className='border py-[1rem] px-[.5rem] ' >
                        <Link className="flex gap-[1rem]" to="home">
                            <img src="/icons/home.svg" alt="" />
                            <p>Accueil</p>
                        </Link>
                    </li>
                    <li className='border py-[1rem] px-[.5rem] ' >
                        <Link className="flex gap-[1rem]" to="card/modify" >
                            <img src="/icons/layer.svg" alt="" />
                            <p>Cartes</p>
                        </Link>
                    </li>
                    <li className='border py-[1rem] px-[.5rem] ' >
                    <a href="" className=' text-center ' > Partager </a>
                    </li>
                    <Link to="/app/user" className=" border py-[1rem] px-[.5rem] flex gap-[1rem] items-center ">
                        <img src="../images/avatar.png" alt="" />
                        <p> Profil : { data && `${data.name}` || "John Doe"} </p>
                    </Link>
                    <Link onClick={logout} className="flex gap-[1rem] hover:text-primary-red hover:font-medium border py-[1rem] px-[.5rem]">
                        <img src="/icons/log-out.svg" alt="" />
                        <p>Logout</p>
                    </Link>
                </ul>
            </ModalParent>


            <button className="flex sm:hidden gap-[1rem] cursor-pointer" 
            onClick={openPopUp} type="button" >
                <img src="/icons/menu.svg" alt="" />
            </button>

            <div className=" hidden md:flex gap-[2rem] items-center max-w-[16rem] border px-1 " >

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