import React from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY } from '../../store/slices'

const audioFile = new Audio('Dont_Worry_Be_Happy.mp3');

const AudioControls = ({togglePlay, play, allSongs}) => {

    const audioPlay = () => {
        if (play) {
            audioFile.play()
        } else {
            audioFile.pause()
        }
    }

    console.log("from audio " + allSongs)


    
    return (
        <div>
            <button id='playButton' onClick={() => {togglePlay(); audioPlay()}}> {play ? 'Play' : 'Pause'} </button>
        </div>
    )
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    play: state.isPlaying,
    allSongs: state.allSongs
})

// mapping slice action function to properties
const mapDispatchToProps = {
    togglePlay: TOGGLE_PLAY
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);

