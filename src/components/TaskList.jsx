import { useContext } from "react";
import { UseContext } from "../context/TaskContext";

export function TaskList() {
  const { state, dispatch, status, search } = useContext(UseContext);

  return (
    <div className="max-w-2xl mx-auto my-5 p-5 font-sans">
      {state
        .filter(
          (item) =>
            status === "All" ||
            (status === "Active" && !item.isCompleted) ||
            (status === "Completed" && item.isCompleted),
        )
        .filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase()),
        )
        .map((item) => (
          <div
            key={item.id}
            className={`p-3 mb-2.5 rounded-lg border border-gray-200 shadow-md overflow-hidden ${
              item.isCompleted ? "bg-green-50" : "bg-orange-50"
            }`}
          >
            <p
              className={`m-0 mb-2.5 text-base font-medium ${
                item.isCompleted
                  ? "text-green-700 line-through"
                  : "text-gray-800"
              }`}
            >
              {item.text}
            </p>
            <div>
              <button
                onClick={() => dispatch({ type: "delete", payload: item.id })}
                className="py-1.5 px-3.5 bg-red-500 text-white border-none rounded cursor-pointer text-sm font-semibold mr-2 inline-block hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "isCompleted", payload: item.id })
                }
                className={`py-1.5 px-3.5 text-white border-none rounded cursor-pointer text-sm font-semibold inline-block transition-colors ${
                  item.isCompleted
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-orange-500 hover:bg-orange-700"
                }`}
              >
                {item.isCompleted ? "✓ Done" : "Complete"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
