import React from "react";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 365,
      smm: 530,
      md: 768,
      lg: 1024,
      xl: 1320,
      xxl: 1536,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
