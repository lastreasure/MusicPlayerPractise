import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import SongImage from './components/SongImage';

class App extends Component {

  render() {
    let audioSource = 'Dont_Worry_Be_Happy.mp3';
    return (
      <div className='App'>
        <Header/>
        <SongImage />
        <ControlPanel audioSource={audioSource} />
        {/* <ControlPanel/> */}
      </div>
    );
  }
}

export default App;
