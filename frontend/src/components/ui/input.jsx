
import { useState } from "react";
import { Link } from "react-router";


const FormInput = ({
	name,
	label,
	value,
	onChange,
	validated,
	inputType,
	errorMessage,
	required=false,
	placeholder="",
	extralabel="",
}) => {

	let borderStyle = "border-gray-300";
	const [updatedType, setUpdatedType] = useState(inputType);

	const handleShow = () => {

		if (updatedType === "text") {
			setUpdatedType("password");
		} else {
			setUpdatedType("text");
		}
	};

	if (validated === true) {
		borderStyle = "border-green-400 hover:outline outline-green-400";
	} else if (validated === false) {
		borderStyle = "hover:border-red-400 hover:outline hover:outline-red-400";
	} else {
		borderStyle = " border-black ";
	}

	return (
		<div className="flex flex-col gap-[.25rem]">
			<div className="flex justify-between">
				<label htmlFor={name} className="text-[0.9rem] text-darkest-purple font-medium" >
					{label}
					{required && <span className="text-primary-red"> * </span>}
				</label>
				{ extralabel && <Link>
					<p className="text-[.9rem] font-regular text-primary-purple underline underline-offset-2" >
						{extralabel}
					</p>
				</Link>}
			</div>

			<div className={`flex border ${borderStyle}rounded-[.25rem] px-[.8rem] py-[.5rem]`}>
				<input type={updatedType} name={name} id={name} value={value} required={required} onChange={onChange}
				placeholder={placeholder} className={`outline-none rounded-[8px] w-full`} />

				{
					name === "password" ?
						updatedType === "password" ?
							<button onClick={handleShow} type="button">
								<img src="./icons/show.svg" className="w-[1rem]" alt="" />
							</button>
						: 
							<button onClick={handleShow} type="button">
								<img src="./icons/hide.svg" className="w-[1rem]" alt="" />
							</button>
					: null
				}
			</div>

			{ validated === false && <p className="text-input-error mt-[.5rem] text-red-400"
			>{errorMessage}</p>}
		</div>
	)
};

export default FormInput;