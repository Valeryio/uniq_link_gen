
import { useContext } from "react";
import { FieldsInfosContext } from "@/context/fieldsInfosContext";

const useFieldInfos = () => {
	const context = useContext(FieldsInfosContext);

	if (!context) {
		throw new Error("useFieldsInfos should be called within a context")
	}

	return context;
};

export default useFieldInfos;