import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import Controls from './components/controls/Controls';


import './App.css';

class App extends Component {
  render() { 
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <Controls/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
