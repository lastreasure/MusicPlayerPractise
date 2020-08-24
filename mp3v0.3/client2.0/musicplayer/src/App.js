import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import SongImage from './components/SongImage';
import Slider from './components/Slider'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        songs: [],
        image: ''
        
    }
  }

  componentDidMount = () => {
    this.getSongs();
  }

  getSongs = () => {
    fetch(`http://localhost:5000/songs`)
    .then((response) => {
      const data = response.data
      this.setState({songs: data})
      console.log('yay data')
    })
    .catch(() => {
      alert('error retrieving data')
    })
  }

  // displaySong = (songs) => {
  //   if(!songs.length) {
  //     return null
  //   }
  //   songs.map( song => (
  //     <div>key{song._id}</div>
  //     <h3>{song.title}</h3>
  //     <h1>{song.artist}</h1>
  // ));
  // }

  render() {
    console.log("from app" + this.state.songs)
    let audioSource = 'Dont_Worry_Be_Happy.mp3';
    return (
      <div className='App'>
        <Header/>
        <SongImage />
        <ControlPanel audioSource={audioSource} />
        
        {/* <Slider/> */}
      </div>
    );
  }
}

export default App;
