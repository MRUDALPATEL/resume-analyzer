import { PDFParse } from "pdf-parse";

export async function extractTextFromPdf(buffer) {
  try {
    const data = await PDFParse(buffer);
    return data.text;
  } catch (err) {
    console.error("PDF Parse Error:", err);
    return "";
  }
}
