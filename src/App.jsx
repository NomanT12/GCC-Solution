import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "pages/home";
import { darkTheme } from "utils/theme";
import GlobalStyle from "global-styles";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
