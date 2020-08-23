import React from 'react';
import './App.css';
import Songs from './components/Songs';
// import SongImage from './components/SongImage';
import Play from './components/Controls/Play';
import { useSelector } from 'react-redux';


function App()  {


    const songs = useSelector(state => state.allSongs);

    console.log("from app " + songs) 

    return (
      // Provider takes the store and the store holds the state
        <div className="App">
          {/* <SongImage/> */}
          <hr />
          <Songs/>
          <hr />
          <Play />
        </div>
    );
  
}

export default App;
