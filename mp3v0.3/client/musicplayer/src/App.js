import React from 'react';
import AudioControls from './components/Controls/AudioControls';


function App()  {


    return (
      // Provider takes the store and the store holds the state
        <div className="App">

          <hr />
          <AudioControls />
          <hr />
        </div>
    );
  
}

export default App;
