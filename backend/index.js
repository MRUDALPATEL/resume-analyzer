import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import analyzeRoute from "./routes/analyzeRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// API routes
app.use("/api/analyze", analyzeRoute);

// === FRONTEND CONFIG START ===

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle all frontend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// === FRONTEND CONFIG END ===

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
