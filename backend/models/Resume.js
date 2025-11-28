import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  resumeText: String,
  aiSummary: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Resume", ResumeSchema);
