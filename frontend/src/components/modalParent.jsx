
import { Children } from "react";
import { useState, useEffect } from "react";



const ModalParent = ({
	children,
	show=true,
	onClose
}) => {


	/**
	 * close - Boolean variable to set the state of the pop up. Open or 
	 * not. It's an intern control variable for the pop up!
	 */
	const [close, setClose] = useState(false);


	/**
	 * @function handleClose
	 * @description - close the popUp from the intern close button
	 */
	const handleClose = () => {
		setClose(!close);
		onClose();
	};

	/**
	 * The initial state of close is not updated when 
	 * show changes. We have to update it to false again 
	 * to allow the component to open Up !
	 */
	useEffect(() => {
	 	setClose(false);
	}, [show]);


	return (
		<div className={`${!close && show ? "flex" : "hidden"}  items-end bg-white shadw-2xl 
			rounded-xl border-1 max-w-[20rem] w-full z-10 fixed flex-col gap-[1rem] left-[50%]  
			translate-x-[-50%] bottom-0 shadow-[0px_00px_0px_10000000px_rgba(0,0,0,0.55)]
			top-[5rem] p-[1rem] h-fit `}
		>

      <button className="cursor-pointer hover:opacity-50 " type="button" onClick={handleClose} >
        <img src="/icons/cross-x.svg" alt="" />
      </button>


		{children}

		</div>
	)
};

export default ModalParent;