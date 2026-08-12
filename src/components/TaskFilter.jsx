import { useContext } from "react";
import { UseContext } from "../context/TaskContext";

export function TaskFilter() {
  const { setStatus, status, search, setSearch } = useContext(UseContext);

  return (
    <div className="max-w-2xl mx-auto p-5 bg-gray-50 rounded-lg border-b-2 border-gray-200 text-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full py-2.5 px-3.5 border-2 border-gray-300 rounded-lg text-base outline-none block mb-3 box-border focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(33,150,243,0.2)] transition-all"
      />
      <div>
        <button
          onClick={() => setStatus("All")}
          className={`py-2 px-5 border-none rounded-lg cursor-pointer text-sm font-semibold mr-2 inline-block transition-colors ${
            status === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("Active")}
          className={`py-2 px-5 border-none rounded-lg cursor-pointer text-sm font-semibold mr-2 inline-block transition-colors ${
            status === "Active"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setStatus("Completed")}
          className={`py-2 px-5 border-none rounded-lg cursor-pointer text-sm font-semibold inline-block transition-colors ${
            status === "Completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
