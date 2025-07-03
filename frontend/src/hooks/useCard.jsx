
import { useContext } from "react";
import { CardContext } from "@/context/cardContext";

const useCard = () => {
	const context = useContext(CardContext);

	if (!context) {
		throw new Error("useCard should be called within a context");
	}

	return context;
};

export default useCard;