import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Header from "./components/header";
import HeroSection from "./components/hero/HeroSection";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <HeroSection />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
