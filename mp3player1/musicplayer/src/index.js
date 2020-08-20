import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Slider extends Component {
    render(){
      return (
        <section className="music-slider">
          <div className="headings">
            {this.props.mpArtist} - {this.props.children} ({this.props.mpGenre})
          </div>
        </section>
      )
    }
}

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mppath:'../public/music.json',
      mpname:'song2.mp3',
      mpartist: 'artist2',
      audiopath: '',
      mpautoplay: 'autoPlay',
      mpgenre:'Folk',
      soundwaveCssClass:'soundwave-hidden',
      currentButtonIs:0,
      clickedButtonId:'',
      mpdata:[],
      restartTimer:'no'
    }
  }

  componentWillMount() {
    var mptitle = this.state.mpname;
    mptitle = mptitle.replace('.mp3','');
    this.setState((state) =>({
      audiopath: state.mppath+state.mpname,
      mpdata:
        [
          {
              "name": "Runaway.mp3",
              "artist": "Xavier Toscana",
              "genre": "Pop"
          },
          {
              "name": "song2.mp3",
              "artist": "artist2",
              "genre": "Folk"
          },
          {
              "name": "song4.mp3",
              "artist": "Xavier Toscana",
              "genre": "Hip hop"
          },
          {
              "name": "song5.mp3",
              "artist": "Xavier Toscana",
              "genre": "Pop"
          },
          {
              "name": "Dont Worry, Be Happy.mp3",
              "artist": "Bobby McFarrin",
              "genre": "Reggae"
          }
      ]
    }));
  }

  render() {
    return (
      <div className="audio-container">
        <h1>{this.props.title}</h1>
        <Slider mpArtist= "Rusted Roots" mpGenre="Folk">Send my on my way</Slider>
        <section className="mplist-buttons">
          {
            this.state.mpdata.map((mp, index) => 
            <button>
                {mp.mpname}
            </button>
            )
          }
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  // <App> Music Player </App>,
  <MusicPlayer title="Music Player"/> ,
document.getElementById('root')
);







