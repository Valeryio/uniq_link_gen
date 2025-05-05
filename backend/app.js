
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Loading the environment files
dotenv.config();

// Loading the db file to connect mongoose
require("./models/dbConfig");

// Create the backend express application
// and configurations
const app = express();
app.use(express.json());
app.use(cors());


// Configuration of different API for objects
const userRouter = require("./routes/user.routes");
const cardRouter = require("./routes/card.routes");

app.get("/", (req, res) => {
  res.send("Hello world, the business card api is on the route : /notes\n Enjoy ! 🎉");
});

// API to interact with the users
app.use("/users", userRouter);

app.use("/cards", cardRouter);


// start the backend server
app.listen(process.env.PORT, () => {
  console.log(`The backend server is listening...`);
});

