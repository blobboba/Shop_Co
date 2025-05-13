import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index } from "./screens/Index/Index";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
