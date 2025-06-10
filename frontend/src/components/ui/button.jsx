

const Button = ({
	onClick,
	children,
	size="small",
	type="submit",
	addIcon=false,
	disabled=false,
	styleType="primary",
	imgSrc,
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
		className={`flex gap-[1rem] cursor-pointer justify-center ${btnStyle} ${btnSize} px-[20px] py-[10px] rounded-[8px]`} >
			{content}
			{imgSrc && <img src={imgSrc} alt="" />}
		</button>
	)
};

export default Button;