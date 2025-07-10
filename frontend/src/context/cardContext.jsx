
import useAuth from "@/hooks/useAuth";
import { useState, createContext } from "react";


export const CardContext = createContext(null);

/**
 * @component CardProvider
 * @description - provide a general context to handle the data
 * 							of a specific form for the user's cards.
 * @param {*} children
 * @returns a provider
 */
export const CardProvider = ({children}) => {

	const { user } = useAuth();
	const [cardFormData, setCardFormData] = useState({
		"title": "",
		"user_id": `${user.id}`,
		"elements": [
		]
	});

	return (
	<CardContext.Provider value = {{ cardFormData, setCardFormData }}>
		{children}
	</CardContext.Provider>
	)
};