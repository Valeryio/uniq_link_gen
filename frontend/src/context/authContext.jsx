
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
			console.log(`Error while getting the local Infos : ${err}`);
		} finally {
			setLoading(false);
		}
	}, []);

	// useEffect(() => {
	// 	console.log("the user  :", user);
	// }, [user])


	const login = (userData) => {
		// console.log("The user context logIn have been called!");
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
		// console.log("The user context is setted!");
	};

	const logout = () => {
		setUser(null);
		console.log("The user is disconnected");
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }} >
			{children}
		</AuthContext.Provider>
	)
};
