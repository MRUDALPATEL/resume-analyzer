import express from "express";
import multer from "multer";
import { analyzeResume } from "../controllers/analyzeController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), analyzeResume);

export default router;
