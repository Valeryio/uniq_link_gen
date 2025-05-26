
const isValidEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

const isValidPassword = (password) => {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{3,15}$/;
	const pwdRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/
	return passwordRegex.test(password);
};

const isValidRetypedPassword = (password, retypedPassword) => {
	return password === retypedPassword;
};

const isValidPhone = (phone) => {
	const keys = "+0123456789";
	
	if(String(phone).length < 8) {
		return false;
	}

	for (let i = 0; i < String(phone).length; i++) {
		if (!keys.includes(phone[i])) {
			console.log("We have : ", phone[i], " not a number");
			return false;
		}
	}

	return true;
}


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
	{
		type: "retypedPassword",
		validator: isValidRetypedPassword,
		errorMessage: "Les mots de passes ne sont pas identiques !",
	},
	{
		type: "phone",
		validator: isValidPhone,
		errorMessage: "Un numéro a au moins 8 digit, et ne contient que des chiffres !",
	}
];


export default inputValidators;