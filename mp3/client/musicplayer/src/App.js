import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import song from "./assets/songList/Don't_Worry_Be_Happy.mp3";
import Button from './components/controlPanel/Buttons'


function App() {
  const songAudio = new Audio(song);


  return (
    <MuiThemeProvider>
      <div>
      <Button songAudio></Button>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

