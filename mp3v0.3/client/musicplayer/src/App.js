import React from 'react';
import './App.css';
import Songs from './components/Songs'
import SongImage from './components/SongImage'
import Play from './components/Controls/Play'

function App() {
  return (
    <div className="App">
      <SongImage/>
      <hr />
      <Songs/>
      <hr />
      <Play />
    </div>
  );
}

export default App;
