import { useContext, useState } from "react";
import { UseContext } from "../context/TaskContext";

export function TaskForm() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(UseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "add",
        payload: {
          id: Date.now(),
          text: text,
          isCompleted: false,
        },
      });
      setText("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-5 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Add Task Manager"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-[70%] py-2.5 px-3.5 border-2 border-gray-300 rounded-lg text-base outline-none mr-2.5 inline-block box-border focus:border-green-500 transition-colors"
        />
        <button
          type="submit"
          className="py-2.5 px-6 bg-green-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold inline-block w-[25%] hover:bg-green-700 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
}
