import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { prefetchAllRoutes, preloadRoute } from "./routes";
import "./index.css";

function render() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  window.addEventListener("load", prefetchAllRoutes, { once: true });
}

preloadRoute(window.location.pathname).then(render, render);
