import React from 'react';
import Songs from './components/Songs';
import AudioControls from './components/Controls/AudioControls';
import { useSelector } from 'react-redux';


function App()  {

    const songs = useSelector(state => state.allSongs);

    console.log("from app " + songs) 

    return (
      // Provider takes the store and the store holds the state
        <div className="App">
          <hr />
          <AudioControls />
        </div>
    );
  
}

export default App;
