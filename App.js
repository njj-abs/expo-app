import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}
