import "./App.css";
import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme((prev) =>
      prev.palette.mode === "light" ? darkTheme : lightTheme
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          {theme.palette.mode === "light" ? "Light Mode" : "Dark Mode"}
        </Typography>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
