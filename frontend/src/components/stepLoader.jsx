

const StepLoader = ({step=1}) => {

	const steps = ["w-[7rem]", "w-[14rem]", "w-[20rem]"];
	const currentStep = steps[step - 1];

	return (
		<div className="flex flex-col gap-[1rem]">
			
			<div className=" w-[20rem] h-[6px] border rounded-[8px] " >
				<div className={` step-loader ${currentStep} rounded-[8px] h-[5px] bg-dark-purple`} >
				</div>
			</div>
			<p className="">
				Étape : <span>{step} </span>
			</p>
		</div>
	)
};


export default StepLoader;