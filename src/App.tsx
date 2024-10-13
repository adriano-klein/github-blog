import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostcontextProvider } from "./contexts/postContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostcontextProvider>
            <Router />
          </PostcontextProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
