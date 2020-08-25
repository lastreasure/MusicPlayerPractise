import React from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY, NEXT_SONG, SHUFFLE } from '../../store/slices'

const audioFile = new Audio();
let songNum = 0

const AudioControls = ({togglePlay, nextSong, play, allSongs, shuffle, currentSong={}}) => {

    // console.log('this is image source: ' + currentSong);


    const iterator = () => {
        if(songNum === allSongs.length) {
            songNum = 0;
        } 
        console.log(typeof(songNum))
        songNum = songNum++;
        console.log("top " + songNum++)
        nextSong(songNum)
    }

    const decrement = () => {
        if(!songNum < 1 || songNum === 1) {
            songNum = songNum--
            console.log("top " + songNum--)
            nextSong(songNum)
        } else {
            songNum = 0;
        }
    }
    
    const audioPlay = () => {
        if (play) {
            audioFile.play()
        } else {
            audioFile.pause()
        }
    }

    React.useEffect(() => {
        audioFile.src=currentSong.songSource
    }, [currentSong])

    
    return (
        <div>
            <button id='previousButton' onClick={() => {decrement() ;  console.log("from dec " + songNum)}}> Skip Back </button>
            <button id='playButton' onClick={() => {togglePlay(); audioPlay(); console.log(songNum)}}> {play ? 'Play' : 'Pause'} </button>
            <button id='skipButton' onClick={() => {iterator()}}> Skip Next </button>
            {/* <button id='shuffleButton' onClick={() => {shuffle(allSongs)}}> Shuffle </button> */}

        </div>
    )
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    play: state.isPlaying,
    currentSong: state.currentSong,
    allSongs: state.allSongs

})

// mapping slice action function to properties
const mapDispatchToProps = {
    togglePlay: TOGGLE_PLAY,
    nextSong: NEXT_SONG,
    shuffle: SHUFFLE
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);

