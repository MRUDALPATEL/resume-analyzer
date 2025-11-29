import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
import analyzeRoute from "./routes/analyzeRoute.js";
app.use("/api/analyze", analyzeRoute);

// Wildcard FIX for Express 5
app.get(/.*/, (req, res) => {
  res.send("Backend running.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
