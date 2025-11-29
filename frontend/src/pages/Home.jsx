import { useState } from "react";
import FileUpload from "../components/FileUpload";
import AnalyzeButton from "../components/AnalyzeButton";
import Loader from "../components/Loader";
import ResultBox from "../components/ResultBox";
import { analyzeResume } from "../api/analyze";

function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleAnalyze() {
    if (!file) {
      alert("Please upload a PDF");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const output = await analyzeResume({ file });
      setResult(output);
    } catch (err) {
      console.error("Analysis error:", err);
      alert("Analysis failed");
    }

    setLoading(false);

    // Clear file input after analysis
    setFile(null);
    
  }

  return (
    <div className="min-h-screen  text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-white">AI Powered</span>{" "}
            <span className="glow">Resume Analyzer</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Upload your resume or paste your text, and let our AI break down
            your skills, strengths, and ideal job roles with precision.
          </p>
        </div>

        {/* Input Card */}
        <div className="border border-gray-700 rounded-2xl p-8 shadow-lg shadow-blue-900/20">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Upload Resume
          </h2>

          <div className="space-y-6">
          <FileUpload onSelect={setFile}/>


            <div className="flex justify-center">
              <AnalyzeButton onClick={handleAnalyze} disabled={loading} />
            </div>

            <div className="text-center">{loading && <Loader />}</div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-12">
          <ResultBox data={result} />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-16">
          Built for clarity. Powered by AI.
        </p>
      </div>
    </div>
  );
}

export default Home;
