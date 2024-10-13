import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :focus {
      outline: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background-color: ${(props) => props.theme["base-background"]};
    }

    body, input, textarea, button {
      font: 400 1rem 'Nunito', sans-serif ;
      color: ${(props) => props.theme["base-text"]};
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
`;
