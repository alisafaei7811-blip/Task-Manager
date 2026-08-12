import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/TaskFilter";

function App() {
  return (
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-center text-gray-800 font-sans text-3xl font-bold">
          📋 Task Manager
        </h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
  );
}

export default App;
