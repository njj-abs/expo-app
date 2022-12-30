import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'expo-dev-client';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
