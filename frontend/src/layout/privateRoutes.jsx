
import { Outlet } from "react-router";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";


const PrivateRoutes = () => {

	const {user, loading} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user && loading === false) {
			console.log("User not exist");
			navigate("/login");
		}
		
		if (user && user.role === "admin") {
			navigate("/admin");
		}
	}, [user, loading]);

	useEffect(() => {
		// console.log(user, user.name);
	}, [loading]);

	if (loading || !user) {
		return <div className="text-center p-4">Chargement...</div>
	}
	

	console.log("The user : ", user);


	return (
		<>
			<div className="flex " >
				<Sidebar />
				<div className=" border w-full" >
					<Header type={"logged"} data={user} />
					<Outlet />
				</div>
			</div>
		</>
	)
};

export default PrivateRoutes;