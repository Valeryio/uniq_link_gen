

const Button = ({children, onClick, styleType="primary", size="small"}) => {

	let content = children || "Default text";
	let btnStyle = "";
	let btnSize = "";

	let largeBtn = "w-full";
	let smallBtn = "";
	let primaryBtn = "bg-primary-purple text-white font-semibold";
	let secondaryBtn = "border border-primary-purple text-primary-purple"

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
			btnStyle = largeBtn;
		break;

		default:
			btnStyle = smallBtn;
	}

	return (
		<button className={`cursor-pointer ${btnStyle} ${btnSize} px-[20px] py-[8px] rounded-[8px]`} >
			{content}
		</button>
	)
};

export default Button;