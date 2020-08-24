import React from 'react';
import './App.css';
import Header from './components/Header';
import ControlPanel from './components/Controls/ControlPanel'


function App()  {
    return (
        <div className="App">

            <Header />
            <hr />
            <ControlPanel/>
            <hr />
        </div>
    );
  
}

export default App;
