

const Button = ({
	onClick,
	children,
	size="small",
	type="submit",
	disabled=false,
	styleType="primary"
}) => {

	let content = children || "Default text";

	let disabledStyle = disabled ? "bg-medium-purple" : "bg-primary-purple";

	let btnStyle = "";
	let btnSize = "";

	// Define the differents size of buttons
	let largeBtn = "w-full";
	let smallBtn = "w-fit";

	// Define the differents styles of buttons
	let primaryBtn = `${disabledStyle} text-white font-semibold`;
	let secondaryBtn = "border border-primary-purple text-primary-purple";

	switch(styleType) {
		case "primary":
			btnStyle = primaryBtn;
		break;
	
		case "secondary":
			btnStyle = secondaryBtn;
		break;

		default:
			btnStyle = primaryBtn;
	}

	
	switch(size) {
		case "large":
			btnSize = largeBtn;
		break;

		default:
			btnSize = smallBtn;
	}


	return (
		<button type={type} disabled={disabled} onClick={onClick} 
		className={`cursor-pointer ${btnStyle} ${btnSize} px-[20px] py-[8px] rounded-[8px]`} >
			{content}
		</button>
	)
};

export default Button;