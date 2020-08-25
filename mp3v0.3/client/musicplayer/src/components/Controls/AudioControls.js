import React from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY, NEXT_SONG } from '../../store/slices'

const audioFile = new Audio();
let songNum = 0

const AudioControls = ({togglePlay, nextSong, play, allSongs, currentSong={}}) => {


    const iterator = () => {
        console.log(typeof(songNum))
        songNum = songNum++;
        console.log("top " + songNum++)
        if(songNum === allSongs.length) {
            songNum = 0;
        } 
        nextSong(songNum)
    }

    
    const audioPlay = () => {
        if (play) {
            audioFile.play()
        } else {
            audioFile.pause()
        }
    }


    // console.log("from audio " + JSON.stringify(allSongs) + allSongs.length)

    React.useEffect(() => {
        audioFile.src=currentSong.songSource
    }, [currentSong])

    
    return (
        <div>
            <button id='playButton' onClick={() => {togglePlay(); audioPlay()}}> {play ? 'Play' : 'Pause'} </button>
            <button id='skipButton' onClick={() => {iterator()}}> Skip Next </button>
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
    nextSong: NEXT_SONG
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);

