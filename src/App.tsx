import {Theme} from "@radix-ui/themes";
import {useContext} from "react";
import {ThemeContext} from "./contexts/ThemeContext";
import {HomePage} from "./pages/Home/Index";

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <Theme appearance={theme}>
      <HomePage />
    </Theme>
  );
}

export default App;
