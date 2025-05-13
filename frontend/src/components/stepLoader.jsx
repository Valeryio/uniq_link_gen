

const StepLoader = ({step=1}) => {

	return (
		<div>
			
			<div className=" w-full h-[6px] border" >
				<div className=" w-[3rem] h-[5px] bg-dark-purple" >

				</div>
			</div>
			<p>Étape : <span>{step}</span></p>
		</div>
	)
};


export default StepLoader;