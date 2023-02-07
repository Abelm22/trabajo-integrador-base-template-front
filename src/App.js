import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider} from "@mui/material";
import Routes from "./pages/routes";
import theme from "./styles/theme/index";
import { HelmetProvider } from 'react-helmet-async';



function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </HelmetProvider>
    
    
  );
}


export default App;
