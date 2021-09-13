import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import LoadComponent from "./load-component";

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#C1C8E4",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <LoadComponent />
      </ThemeProvider>
    </>
  );
}
