import React, {Component} from 'react';
import './App.css';
import Songs from './components/Songs';
// import SongImage from './components/SongImage';
import Play from './components/Controls/Play';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render () {
    return (
      // Provider takes the store and the store holds the state
      <Provider store={store}>
        <div className="App">
          {/* <SongImage/> */}
          <hr />
          <Songs/>
          <hr />
          <Play />
        </div>
      </Provider>
    );
  }
}

export default App;
