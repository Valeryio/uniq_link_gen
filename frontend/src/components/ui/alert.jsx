

const Alert = ({state="fail", message="Empty alert !"}) => {

	let stateImg;
	let borderStyle;

	if (state === "success") {
		borderStyle = "border-primary-green bg-green-50 text-primary-green";
	} else if (state === "fail") {
		borderStyle = "border-primary-red bg-red-50 text-primary-red";
	} else {

	}


	return (
		<div
				className={`absolute left-[50%] translate-x-[-50%] shadow-lg font-medium flex items-center min-w-[12rem] 
					w-fit h-[3rem] border ${borderStyle} px-[1rem] rounded-[.5rem]`}
		>
			<img src="" alt="" />
			{message}
		</div>
	)
};

export default Alert;