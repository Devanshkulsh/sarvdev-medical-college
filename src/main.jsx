import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* ===== GLOBAL IMAGE LOAD HANDLER ===== */
document.addEventListener(
  "load",
  (e) => {
    if (e.target && e.target.tagName === "IMG") {
      e.target.setAttribute("data-loaded", "true");
    }
  },
  true
);

/* ===== GLOBAL LAZY LOADING ===== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
