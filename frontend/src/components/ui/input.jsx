import { useState } from "react";
import { Link } from "react-router";


const FormInput = ({
	name,
	label,
	value,
	onChange,
	validated,
	type="text",
	errorMessage,
	required=false,
	extralabel="",
}) => {

	let borderStyle = "";

	if (!validated) {
		borderStyle = "hover:border-red-400 hover:outline hover:outline-red-400";
	} else {
		borderStyle = "border-green-400 hover:outline outline-green-400";
	}

	return (
		<div className="flex flex-col gap-[.25rem]">
			<div className="flex justify-between">
				<label htmlFor={name} className="text-input font-medium" >
					{label}
					{required && <span className="text-primary-red"> * </span>}
				</label>
				<Link>
					<p className="text-[.9rem] font-regular text-primary-purple underline underline-offset-2" >
						{extralabel}
					</p>
				</Link>
			</div>
			<input type={type} name={name} id={name} value={value} required={required} onChange={onChange}
			className={`border ${borderStyle} px-[.8rem] py-[.5rem] w-full rounded-[.25rem]`} />
			<p className="text-input-error mt-[.5rem] text-red-400"
			>{errorMessage}</p>
		</div>
	)
};

export default FormInput;