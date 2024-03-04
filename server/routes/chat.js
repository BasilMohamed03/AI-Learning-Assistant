import express from "express";
import { chatController } from "../controllers/chatController.js";

const router = express.Router();

// Define route for handling chat requests
router.post("/", chatController);

export default router;
