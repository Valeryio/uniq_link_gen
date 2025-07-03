
import { Outlet } from "react-router";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import useFieldInfos from "@/hooks/useFieldInfos";


const PrivateRoutes = () => {

	const {user, loading} = useAuth();
	const navigate = useNavigate();
	const { persistFieldsInfos } = useFieldInfos(); 

	// Async function at the top of the app
	// when the user tries to log in
	useEffect(() => {
		const fetchFieldsInfos = async () => {
			let data = null;
			try  {
				data = await fetch("/fieldInfos.json");
				data = await data.json();
				persistFieldsInfos(data);
			} catch (err) {
				console.log(`Error while fetching the field's data ${err}`);
			}
		};

		fetchFieldsInfos();

	}, []);



	useEffect(() => {
		if (!user && loading === false) {
			console.log("User not exist");
			navigate("/login");
		}
		
		if (user && user.role === "admin") {
			navigate("/admin");
		}
	}, [user, loading]);


	if (loading || !user) {
		return <div className="text-center p-4">Chargement...</div>
	}
	

	// console.log("The user : ", user);


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