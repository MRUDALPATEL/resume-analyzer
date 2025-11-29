export async function analyzeResume({ file }) {
  const BASE_URL = "https://resume-analyzer-jnaa.onrender.com/api/analyze";

  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(BASE_URL, {
      method: "POST",
      body: formData,
    });

    return res.json();
  }
}
