import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@media (max-width: 768px) {
    body {
      display: flex;
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme['base-background']};
    max-width: 1440px;
    margin: 0 auto;
  }

  body, input-security, text-area, button {
    font: 400 1rem Nunito Sans, sans-serif;
    color: ${props => props.theme['base-text']};
  }

  h1 {
    color: ${props => props.theme['base-title']};
  }
`
