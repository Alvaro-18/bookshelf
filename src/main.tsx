import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "@radix-ui/themes/styles.css";
import {ThemeContextProvider} from "./contexts/ThemeContext.tsx";
import App from "./App.tsx";
import "./styles/global.css";
import {UserContextProvider} from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
