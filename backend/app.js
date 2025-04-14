
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const notesRouter = require("./routes/noteRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello world");
});

// Route api towards the note's route
app.use("/notes", notesRouter);


app.listen(process.env.PORT, () => {
  console.log(`The server is listening on ${process.env.PORT} ...`);
});

