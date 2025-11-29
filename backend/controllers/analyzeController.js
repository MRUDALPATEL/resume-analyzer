import Groq from "groq-sdk";
import Resume from "../models/Resume.js";
import { extractTextFromPdf } from "../utils/parsePdf.js";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function analyzeResume(req, res) {
  try {
    let resumeText = "";

    // If file provided → parse PDF
    if (req.file && req.file.buffer) {
      resumeText = await extractTextFromPdf(req.file.buffer);
    } 

    // If raw text provided
    if (req.body.text) {
      resumeText = req.body.text;
    }

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({ error: "No resume text found" });
    }

    // OpenAI prompt
    const prompt = `
    Analyze the following resume text and respond ONLY in a clean JSON object
    with keys: skills, summary, suggested_roles.

    Resume:
    """${resumeText}"""
    `;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    // Extract the actual text
    const aiText = response.choices[0].message.content;

    // Try parsing JSON
    let aiJson = {};
    try {
      aiJson = JSON.parse(aiText);
    } catch {
      // fallback if AI includes extra text
      aiJson = JSON.parse(aiText.match(/\{[\s\S]*\}/)[0]);
    }

    // Save to DB
    const saved = await Resume.create({
      resumeText,
      aiSummary: aiJson,
    });

    res.json(aiJson);
  } catch (error) {
    console.error("Analyze Error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
