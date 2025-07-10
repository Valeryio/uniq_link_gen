
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router";

const Sidebar = () => {

	const { logout } = useAuth();

	return (
		<aside className="flex flex-col px-[1rem] py-[2rem] justify-between min-w-[10rem] w-[14rem]" >

			<div className="flex flex-col  border border-red-600 gap-[2rem]" >
				<button className="cursor-pointer" >
					<img src="/icons/menu.svg" alt="menu icon" />
				</button>

				<div className=" ">
					<ul className=" flex flex-col gap-[1rem]">
						<li className="">
							<Link className="flex gap-[1rem]" to="home">
								<img src="/icons/home.svg" alt="" />
								<p>Accueil</p>
							</Link>
						</li>

						<li className="">
							<Link className="flex gap-[1rem]" to="card/modify" >
								<img src="/icons/layer.svg" alt="" />
								<p>Cards</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>


			<div >
				<ul className=" flex flex-col gap-[1rem] ">
					<li className="">
						<Link className="flex gap-[1rem]">
							<img src="/icons/help-circle.svg" alt="" />
							<p>Support</p>
						</Link>
					</li>
					<li className="">
						<Link className="flex gap-[1rem]">
							<img src="/icons/settings.svg" alt="" />
							<p>Settings</p>
						</Link>
					</li>
					<li className="">
						<Link onClick={logout}
						className="flex gap-[1rem] hover:text-primary-red hover:font-medium">
							<img src="/icons/log-out.svg" alt="" />
							<p>Logout</p>
						</Link>
					</li>
				</ul>
			</div>

		</aside>
	)
};

export default Sidebar;