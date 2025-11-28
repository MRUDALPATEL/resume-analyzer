import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/db.js";
import analyzeRoute from "./routes/analyzeRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/analyze", analyzeRoute);

app.get("/", (req, res) => {
  res.send("Backend running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
