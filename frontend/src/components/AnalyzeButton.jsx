function AnalyzeButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all
      ${disabled ? "bg-gray-600 cursor-not-allowed" :
      "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"}`}
    >
      Analyze Resume
    </button>
  );
}

export default AnalyzeButton;
