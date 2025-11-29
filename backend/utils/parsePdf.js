import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PdfReader } = require("pdfreader");


export async function extractTextFromPdf(buffer) {
  return new Promise((resolve, reject) => {
    let text = "";

    new PdfReader().parseBuffer(buffer, (err, item) => {
      if (err) {
        console.error("PDFReader Error:", err);
        return reject(err);
      }
      if (!item) {
        // finished reading
        return resolve(text.trim());
      }
      if (item.text) {
        text += item.text;
      }
    });
  });
}
