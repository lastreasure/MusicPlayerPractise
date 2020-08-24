import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import SongImage from './components/SongImage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <SongImage />
        <ControlPanel/>
      </div>
    );
  }
}

export default App;
