import express from "express";
import { quizController } from "../controllers/quizController.js";

const router = express.Router();

// Define route for handling quiz requests
router.post("/", quizController);

export default router;
