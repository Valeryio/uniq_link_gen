
import { Outlet } from "react-router";


/**
 * @function PublicRoutes
 * 
 * @description - This is the main component layout, that renders
 * 							all the public components of the application
 * @returns 
 */
const PublicRoutes = () => {
	return (
		<>
			<Outlet />
		</>
	)
};

export default PublicRoutes;