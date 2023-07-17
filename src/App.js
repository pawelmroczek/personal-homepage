import { ThemeProvider } from "styled-components";
import CV from "./features/CV";
import { GlobalStyle } from "./GlobalStyle";
import theme from "./theme";
import { useSelector } from "react-redux";
import { selectMode } from "./features/Portfolio/portfolioSlice";

function App() {
  const mode = useSelector(selectMode);

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      <CV />
    </ThemeProvider>
  );
}

export default App;
