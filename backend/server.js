const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const User = require("./models/User");

// Connect to MongoDB

mongoose
  .connect("mongodb://127.0.0.1:27017/registration-app")
  .then(() => console.log("MongoDB connected ✔"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Return user info (including hashed password)
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error registering user" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
