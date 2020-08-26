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
let pausePlayIcon = <PlayArrowIcon/>

const AudioControls = ({togglePlay, nextSong, play, allSongs, shuffle, currentSong={}}) => {

    const iterator = () => {
        pausePlayIcon=<PlayArrowIcon/>
        if(songNum === allSongs.length-1) {
            songNum = 0;
            // pausePlayIcon=<PlayArrowIcon/>
        } 
        console.log(typeof(songNum))
        songNum = songNum++;
        console.log("top " + songNum++)
        nextSong(songNum)

        play=false
        // pausePlayIcon=<PlayArrowIcon/>
    }

    const decrement = () => {
        pausePlayIcon=<PlayArrowIcon/>
        play=false
        if(songNum === 0 ) {
            songNum = allSongs.length;
            // pausePlayIcon=<PlayArrowIcon/>
        
        } 
            songNum = songNum--
            console.log("top " + songNum--)
            nextSong(songNum)
            // pausePlayIcon=<PlayArrowIcon/>
    }

    const audioPlay = () => {
        if (!play) {
            audioFile.pause()
            pausePlayIcon = <PlayArrowIcon />
        } else {
            audioFile.play()
            pausePlayIcon = <PauseIcon/>
        }
    }

    React.useEffect(() => {
        audioFile.src=currentSong.songSource
    }, [currentSong])


    return (
        <div>
            <Button id='previousButton' variant="contained" color="primary"
                    onClick={() => {decrement() ; audioPlay(); togglePlay();console.log("from dec " + songNum)}}> 
                <SkipPreviousIcon/>
            </Button>

            <Button id='playButton' variant="contained" color="primary" 
                    onClick={() => {audioPlay(); togglePlay(); console.log(songNum)}}>
                {/* {play ? <PlayArrowIcon/> : <PauseIcon/> } */}
                {pausePlayIcon}
            </Button>

            <Button id='skipButton' variant="contained" color="primary"
                    onClick={() => {iterator(); audioPlay(); togglePlay();console.log("from incre " + songNum)}}>
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

