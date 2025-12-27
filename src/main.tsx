import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "../components/ThemeProvider.tsx";
import { MotionConfig } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut", bounce: 0.4, type: "spring", delay: 0.2 }}>
        <App />
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>
);
