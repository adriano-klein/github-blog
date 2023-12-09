import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Home />
    </ThemeProvider>

  )
}