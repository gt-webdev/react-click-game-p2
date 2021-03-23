import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Setup from "./Setup";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const [prefersDarkMode, setDarkMode] = useState("dark");
  
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{  backgroundColor: prefersDarkMode ? "#282c34" : "#fff" }}>
        <CssBaseline />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography className="mb-3" variant="h2">Clicking Game</Typography>
          <Setup setDarkMode={setDarkMode} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
