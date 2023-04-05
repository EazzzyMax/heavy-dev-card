import React from "react";
import Main from "../pages/Main";
import { ThemeProvider } from "styled-components";
import theme from "../shared/theming/theme";

const App = () => {
  return (
      //а нахуя я провайдер добавил? все равно же тему импортирую
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>

  );
};

export default App;
