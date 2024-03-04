// Import required modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRouter from "./routes/chat.js";
import quizRouter from "./routes/quiz.js";


// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Apply CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use("/chat", chatRouter);
app.use("/quiz", quizRouter);


// Define a default route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
