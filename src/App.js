import React from 'react';
import './App.css'
import {ThemeProvider} from '@material-ui/styles';
import theme from './components/ui/Theme';
import CenteredGrid from './components/CenteredGrid';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CenteredGrid/>
      
    </ThemeProvider>
    
  );
}

export default App;
