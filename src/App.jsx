import Home from "pages/home";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "utils/theme";
import GlobalStyle from "global-styles";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
