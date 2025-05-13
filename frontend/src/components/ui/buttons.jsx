

const Button = ({children, onClick, type="submit", styleType="primary", size="small"}) => {

	let content = children || "Default text";
	let btnStyle = "";
	let btnSize = "";

	// Define the differents size of buttons
	let largeBtn = "w-full";
	let smallBtn = "w-fit";

	// Define the differents styles of buttons
	let primaryBtn = "bg-primary-purple text-white font-semibold";
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
		<button type={type} onClick={onClick} className={`cursor-pointer ${btnStyle} ${btnSize} px-[20px] py-[8px] rounded-[8px]`} >
			{content}
		</button>
	)
};

export default Button;