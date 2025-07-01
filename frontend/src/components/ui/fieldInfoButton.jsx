
const FieldInfoButton = ({children, source}) => {

	return (
		<button className=" w-fit cursor-pointer flex gap-[.5rem] px-[1rem] py-[.5rem] rounded-9x
		 border border-lightest-purple hover:shadow-lg ">
			<img src={source} alt="" className=""/>
			{children || "empty"}
		</button>
	)
};

export default FieldInfoButton;