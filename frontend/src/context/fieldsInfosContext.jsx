

import { createContext, useEffect, useState } from "react";

// Create the context for the data to share
export const FieldsInfosContext = createContext(null);


// Create the provider of this context, with the different
// data to share accross the component tree
export const FieldsInfoProvider = ({children}) => {

	const [fieldsInfos, setFieldsInfos] = useState(null);
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		try {
			let persistedFieldsInfos = localStorage.getItem("fieldsInfos");
			if (persistedFieldsInfos) {
				persistedFieldsInfos = JSON.parse(persistedFieldsInfos);
				setFieldsInfos(persistedFieldsInfos);
			}
		} catch (err) {
			console.error(`Error while fetching the fields infos from the localStorage : ${err}`);
		} finally {
			setLoading(false);
		}

	}, []);

	const persistFieldsInfos = (data) => {
		setFieldsInfos(data);
		localStorage.setItem("fieldsInfos", JSON.stringify(data));
	};

	return (
		<FieldsInfosContext.Provider value={{ loading, setLoading,fieldsInfos, persistFieldsInfos }}>
			{children}
		</FieldsInfosContext.Provider>
	)
}