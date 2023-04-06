import React from "react";
import Main from "../pages/Main";
import { darkTheme } from "../shared/theming/darkTheme";
import {Global} from "./GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global />
      <Main />
    </ThemeProvider>
  );
};

export default App;
