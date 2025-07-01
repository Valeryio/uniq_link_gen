

import Header from "../../components/header";
import { Link } from "react-router";
import Sidebar from "../../components/sidebar";
import LogedHome from "./privateHome";
import Button from "../../components/ui/button";
import ModifyCard from "./modifyCard";
import FieldInfoButton from "../../components/ui/fieldInfoButton";

const Dashboard = () => {
	return (
		<>
			<div className="flex h-full border-red  " >

				<Sidebar />
				
				<div className="w-full h-full overflow-auto">
					<Header type="secondary" />

					{/* <LogedHome /> */}

					<ModifyCard />


				</div>
			</div>
		</>
	)
};

export default Dashboard;