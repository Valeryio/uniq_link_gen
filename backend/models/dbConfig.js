

const mongoose = require("mongoose");

// Connexion to the mongo database
mongoose.connect(process.env.MONGO_WEB_URI)
.then((docs) => {
	console.log("Database connected successfully!");
})
.catch((err) => {
	console.error(`Error while connecting to the database ${err}`);
})