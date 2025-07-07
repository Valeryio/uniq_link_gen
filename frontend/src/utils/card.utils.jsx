

/**
 * @function refactorCardForm
 * @description - it give a default name to the card of the user, if no
 * 							name have been given, and filter the form to retrieve
 * 							the fieldId. This attribute is important for the frontend
 *							but no for the backend database
 * @param {} cardForm 
 */
export const refactorCardForm = (cardForm) => {

	if(cardForm.title === "") {
	  cardForm.title = "Personal";
	}
	cardForm.elements = cardForm.elements.filter((element) => {
		delete element.fieldId;
		console.log("The new element : ", element);
		return element;
	});
}