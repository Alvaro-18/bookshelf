import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "@radix-ui/themes/styles.css";
import {ThemeContextProvider} from "./contexts/ThemeContext.tsx";
import App from "./App.tsx";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
);
