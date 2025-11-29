import { useRef} from "react";
import { X } from "lucide-react";

export default function FileUpload({ onSelect }) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const f = e.target.files[0] || null;
    onSelect(f);
  };

  

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        onChange={handleChange}
        className="block w-full text-sm text-gray-300 p-2 border border-gray-600 rounded-lg cursor-pointer"
      />
    </div>
  );
}

