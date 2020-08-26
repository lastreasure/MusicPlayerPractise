import React from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY, NEXT_SONG, SHUFFLE } from '../../store/slices'

import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';


const audioFile = new Audio();
let songNum = 0

const AudioControls = ({togglePlay, nextSong, play, allSongs, shuffle, currentSong={}}) => {

    const iterator = () => {
        if(songNum === allSongs.length-1) {
            songNum = 0;
        } 
        console.log(typeof(songNum))
        songNum = songNum++;
        console.log("top " + songNum++)
        nextSong(songNum)
    }

    const decrement = () => {
        if(songNum === 0 ) {
            songNum = allSongs.length;
        } 
            songNum = songNum--
            console.log("top " + songNum--)
            nextSong(songNum)
        
    }
    

    // if(!songNum < 1 || songNum === 1) {
    //     songNum = songNum--
    //     console.log("top " + songNum--)
    //     nextSong(songNum)
    // } else {
    //     songNum = 0;
    // }

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
            <Button id='previousButton' variant="contained" color="primary"
                    onClick={() => {decrement() ;  console.log("from dec " + songNum)}}> 
                <SkipPreviousIcon/>
            </Button>

            <Button id='playButton' variant="contained" color="primary" 
                    onClick={() => {togglePlay(); audioPlay(); console.log(songNum)}}>
                {play ? <PlayArrowIcon/> : <PauseIcon/> }
            </Button>

            <Button id='skipButton' variant="contained" color="primary"
                    onClick={() => {iterator()}}>
                <SkipNextIcon/>
            </Button>

            <Button id='shuffle' variant="contained" color="primary">
                <ShuffleIcon/>
            </Button>

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

