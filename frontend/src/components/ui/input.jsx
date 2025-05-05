import { useState } from "react";

const Input = ({label, type, name, value, changeHandler}) => {

	const [inputValue, setInputValue] = useState("");

	const handleInput = (event) => {
		event.target.name = event.target.value
	};

	return (
		<div>
			<label htmlFor={label} className="text-[.9rem] font-medium" >{label}</label>
			<input type={type} value={[value].name} onChange={handleInput} className="border px-[.8rem] py-[.5rem] w-full rounded-[.25rem]" />
		</div>
	)
};

export default Input;