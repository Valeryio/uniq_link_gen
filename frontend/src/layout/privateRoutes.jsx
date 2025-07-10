
import { Outlet } from "react-router";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { CardProvider } from "@/context/cardContext";


/**
 * @function PrivateRoutes
 * 
 * @description - This is the main private component that renders
 * 							all the privates routes.
 * @returns 
 */
const PrivateRoutes = () => {

	const {user, loading} = useAuth();
	const navigate = useNavigate();

	// If the user doesn't exist and the loading is ended
	// then it is not registered in the database
	useEffect(() => {
		if (!user && loading === false) {
			console.log("User not exist");
			navigate("/login");
		}

		// THe user exists so, we check its role
		if (user && user.role === "admin") {
			navigate("/admin");
		}
	}, [user, loading]);


	// First state, when the user informations are still loading
	if (!user || loading) {
		return <div className="text-center p-4">Chargement...</div>
	}
	
	return (
		<CardProvider>
			<div className="flex h-[100%] border-2 border-red-600" >
				<Sidebar />
				<div className=" border w-full" >
					<Header type={"logged"} data={user} />
					<Outlet />
				</div>
			</div>
		</CardProvider>
	)
};

export default PrivateRoutes;