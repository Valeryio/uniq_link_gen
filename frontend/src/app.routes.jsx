
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublicRoutes from "./layout/publicRoutes";
import PrivateRoutes from "./layout/privateRoutes";
import AdminRoutes from "./layout/adminRoutes";
import Home from "./pages/public/home";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";
import Login from "./pages/public/login";
import Register from "./pages/public/register";
import PrivateHome from "./pages/user/privateHome";
import SuccessfullSignUp from "./pages/public/successfulSignUp";
import AddCard from "./pages/user/addCard";
import ShowCard from "./pages/public/showCard";
import PageNotFound from "./pages/public/pageNotFound";
import Profil from "./pages/user/profil";


const AppRoutes = () => {
	return (

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PublicRoutes />} >
					<Route index element={<Home />} ></Route>
					<Route path="home" element={<Home />} ></Route>
					<Route path="about" element={<About />} ></Route>
					<Route path="contact" element={<Contact />} ></Route>
					<Route path="login" element={<Login />} ></Route>
					<Route path="register" element={<Register />} ></Route>
					<Route path="card/:cardId" element={<ShowCard />} ></Route>
					<Route path="successfullSignUp" element={<SuccessfullSignUp />} ></Route>
				</Route>
				
				<Route path="/app" element={<PrivateRoutes />} >
					<Route index element={<PrivateHome />} ></Route>
					<Route path="user" element={<Profil />} ></Route>
					<Route path="home" element={<PrivateHome />} ></Route>
					<Route path="card/add/" element={<AddCard />} ></Route>
					<Route path="card/modify/" element={<AddCard />} ></Route>
				</Route>
				
				<Route path="/app/admin" element={<AdminRoutes />} >
					<Route path="home" element={<Home />} ></Route>
				</Route>

				<Route path="*" element={<PageNotFound />} />

			</Routes>
		</BrowserRouter>
	)
};

export default AppRoutes;