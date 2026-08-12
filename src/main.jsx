import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import { TaskContext } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </StrictMode>,
);
