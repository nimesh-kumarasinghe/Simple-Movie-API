// app.js
require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRoutes = require("./Routes/movieRoutes");

const app = express();

// MongoDB connection
const dbURI = process.env.MONGODB_URI; // Use environment variable for MongoDB URI
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api", movieRoutes);

const PORT = process.env.PORT || 3000; // Use environment variable for port
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
