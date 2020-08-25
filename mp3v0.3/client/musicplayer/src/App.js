import React from 'react';
import AudioControls from './components/Controls/AudioControls';
import SongImage from './components/SongDisplay/SongImage';
import store from './store';
import { getSongs } from './store/slices';


function App()  {

    React.useEffect(() => {
      store.dispatch(getSongs())
    }, [] )

    return (
      // Provider takes the store and the store holds the state
        <div className="App">
          <SongImage />
          <AudioControls />
        </div>
    );
  
}

export default App;
