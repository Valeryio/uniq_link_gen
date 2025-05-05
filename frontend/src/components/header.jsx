
import React from "react";
import { Link } from "react-router";


const Header = () => {

    return (
        <header className="flex justify-between bg-amber-50 py-[1.5rem] px-[2rem]" >
		    <div className="">
            LOGO
            </div>

            <div className="flex gap-[2rem]">
                <nav className="">
                    <ul className="flex gap-[1rem]">
                        <li className=""> 
                            <Link to="/" >Accueil</Link>
                        </li>
                        <li className="">
                            <Link to="/about" >À propos</Link>
                        </li>
                        <li className="">
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </nav>
        
                
                <div className="flex gap-[2rem]">
                    <Link to="/login" >
                        <button className="cursor-pointer">Connexion</button>
                    </Link>
                    <Link to="/register" >
                        <button className="cursor-pointer">Inscrire</button>
                    </Link>
                </div>
            </div>
		</header>

    )
};

export default Header;