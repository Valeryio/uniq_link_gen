
import {createContext, useEffect, useState} from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		try {
			let localUser = localStorage.getItem("user");
			if (localUser) {
				localUser = JSON.parse(localUser);
				setUser(localUser);
			}

		} catch (err) {
			// console.error(`Error while getting the local Infos : ${err}`);
		} finally {
			setLoading(false);
		}
	}, []);


	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		// console.log("The user is disconnected");
		localStorage.removeItem("user");
		localStorage.removeItem("fieldsInfos");
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }} >
			{children}
		</AuthContext.Provider>
	)
};
