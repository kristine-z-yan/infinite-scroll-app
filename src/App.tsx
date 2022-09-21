import React from 'react';
import styles from './App.module.css';
import Home from "./pages/Home/Home";
import {Container, CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container maxWidth="xs" className={styles.container}>
              <Home />
          </Container>
      </ThemeProvider>

  );
}

export default App;
