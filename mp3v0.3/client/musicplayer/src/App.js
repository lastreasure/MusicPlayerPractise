import React from 'react';
import './App.css';
import Header from './components/Header';
import ControlPanel from './components/Controls/ControlPanel'
import {Typography} from '@material-ui/core';


function App()  {
    return (
        <div className="App">
          <Typography>hello</Typography>
            <Header />
            <hr />
            <ControlPanel/>
            <hr />
        </div>
    );
  
}

export default App;
