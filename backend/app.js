
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/allowedOrigins"); 

// Loading the environment files
dotenv.config();

// Loading the db file to connect mongoose
require("./models/dbConfig");

// Create the backend express application
// and configurations
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
/*
app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));
*/

app.use("/", express.static(path.join(__dirname, "/public")));


// Configuration of different API for objects
const userRouter = require("./routes/user.routes");
const cardRouter = require("./routes/card.routes");

// API to interact with the users
app.use("/users", userRouter);

app.use("/cards", cardRouter);


// start the backend server
app.listen(process.env.PORT, () => {
  console.log(`The backend server is listening...`);
});

