// src/components/ResultBox.jsx
export default function ResultBox({ data }) {
  if (!data) return null;

  const { skills = [], summary = "", suggested_roles = [] } = data;

  return (
    <div className=" border rounded-2xl p-6 mt-8 shadow-lg shadow-blue-900/20">
      <h3 className="text-2xl font-semibold mb-4 text-gray-100 underline">Analysis Result : </h3>

      <div className="mb-6">
        <p className="text-gray-300 mb-1 font-medium">📄 Summary</p>
        <p className="text-gray-200">{summary}</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-300 mb-2 font-medium">🧰 Skills</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-300 mb-2 font-medium">🎯 Suggested Roles</p>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          {suggested_roles.map((role, idx) => (
            <li key={idx}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
