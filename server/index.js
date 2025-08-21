require("dotenv").config();
const express = require("express");
const connectDB = require("./Models/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/AuthRouter");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
