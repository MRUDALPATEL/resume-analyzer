export async function analyzeResume({ file }) {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      body: formData,
    });

    return res.json();
  }
}
