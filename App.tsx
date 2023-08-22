import React from 'react';
import Home from './src/screens/Home';
import { AppIcon } from './src/assets/icons/AppIcon';
import { ThemeProvider } from './src/context/ThemeContext';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
