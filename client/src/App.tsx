import React from 'react';
import styles from './App.module.css';
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Messenger from "./pages/Messenger/Messenger";
import Chat from "./features/chat/Chat";

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
                      <Route path="/user" element={<User />} />
                      <Route path="/messenger" element={<Messenger />} />
                      <Route path="/conversations/:id" element={<Chat />} />
                  </Routes>
              </Router>
          </Container>
      </ThemeProvider>
  );
}

export default App;
