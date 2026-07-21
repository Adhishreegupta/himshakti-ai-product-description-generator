import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import ErrorBoundary from "./components/ErrorBoundary";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <ErrorBoundary>
      <App />
    </ErrorBoundary>

    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="dark"
    />

  </StrictMode>
);