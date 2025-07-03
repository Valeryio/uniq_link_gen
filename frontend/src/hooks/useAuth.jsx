
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth should be called within a context");
	}

	return context;
};

export default useAuth;