import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  ${'' /* background-color: #287389; */}
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Montserrat",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 

    font-family: "Montserrat",sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.5;
    color: #000;
    max-width: 1920px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
