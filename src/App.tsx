import React from 'react';
import styles from './App.module.css';
import Home from "./pages/Home/Home";
import {Container, CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

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
              <Router>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/user" element={<Home />} />
                  </Routes>
              </Router>
          </Container>
      </ThemeProvider>
  );
}

export default App;
