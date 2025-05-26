
import { useState } from "react";
import { Link } from "react-router";


let allCountries;
try {
	allCountries = await fetch("/countries.json");
	allCountries = await allCountries.json();
} catch (err) {
	console.log(err);
}

const FormSelect = ({
	name,
	label,
	formData,
	onChange,
	validated,
	SelectType,
	errorMessage,
	required=false,
	placeholder=""
}) => {

	let borderStyle = "border-gray-300";
	// const [updatedType, setUpdatedType] = useState(SelectType);


	// if (validated === true) {
	// 	borderStyle = "border-green-400 hover:outline outline-green-400";
	// } else if (validated === false) {
	// 	borderStyle = "hover:border-red-400 hover:outline hover:outline-red-400";
	// } else {
	// 	borderStyle = "border-gray-800";
	// }

	return (
		<div className="flex flex-col gap-[.25rem]">
			<div className="flex justify-between">
				<label htmlFor={name} className="text-input font-medium" >
					{label}
					{required && <span className="text-primary-red"> * </span>}
				</label>
			</div>

			<div className={`flex border rounded-[.25rem] px-[.8rem] py-[.5rem]`}>

				<select name={name} id={name} onChange={onChange} value={formData.country}
				className={`outline-none  w-full`} >
					<option >Selectionnez un pays</option>
					{
						allCountries.map(countryObj => (
							<option value={countryObj.country} key={countryObj.countryCode}>
								{countryObj.country}
							</option>
						))
					}
				</select>
			</div>

			{ validated === false && <p className="text-Select-error mt-[.5rem] text-red-400"
			>{errorMessage}</p>}
		</div>
	)
};

export default FormSelect;