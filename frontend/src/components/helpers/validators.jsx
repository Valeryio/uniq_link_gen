
const isValidEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

const isValidPassword = (password) => {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{3,15}$/;
	return passwordRegex.test(password);
};

const isValidName = (name) => {
	name = name.trim();
	if (!name) {
		return false;
	}
	return true;
};

const inputValidators = [
	{
		type: "name",
		validator: isValidName,
		errorMessage: "Le nom ne peut pas être vide",
	},
	{
		type: "email",
		validator: isValidEmail,
		errorMessage: "L'email n'est pas valide",
	},
	{
		type: "password",
		validator: isValidPassword,
		errorMessage: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial !",
	},
];


export default inputValidators;