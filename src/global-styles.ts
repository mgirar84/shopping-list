import { createGlobalStyle } from 'styled-components';

// Create a global style
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;