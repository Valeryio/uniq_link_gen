
import useAuth from "@/hooks/useAuth";
import { useState, createContext } from "react";


export const CardContext = createContext(null);

export const CardProvider = ({children}) => {

	const { user } = useAuth();
	const [cardFormData, setCardFormData] = useState({
		"title": "Personal",
		"user_id": `${user.name}`,
		"elements": [
		]
	});

	return (
	<CardContext.Provider value = {{ cardFormData, setCardFormData }}>
		{children}
	</CardContext.Provider>
	)
};