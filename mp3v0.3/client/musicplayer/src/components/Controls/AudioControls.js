import React, { useState } from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY, NEXT_SONG, SHUFFLE } from '../../store/slices'

import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ReplayIcon from '@material-ui/icons/Replay';
import ShuffleIcon from '@material-ui/icons/Shuffle';


const audioFile = new Audio();
let songNum = 0

const AudioControls = ({togglePlay, nextSong, isPaused, allSongs, shuffle, currentSong={}}) => {

    const [playIcon, setPlayIcon] = useState(<PlayArrowIcon/>)

    const iterator = () => {
        setPlayIcon(<PlayArrowIcon/>)
        if(songNum === allSongs.length-1) {
            songNum = 0;
        } 
        console.log(typeof(songNum))
        songNum = songNum++;
        console.log("top " + songNum++)
        nextSong(songNum)
        
    }

    const decrement = () => {
        setPlayIcon(<PlayArrowIcon/>)
        if(songNum === 0 ) {
            songNum = allSongs.length;        
        } 
            songNum = songNum--
            console.log("top " + songNum--)
            nextSong(songNum)
        
    }

    const audioPlay = () => {
        if (!isPaused) {
            audioFile.pause()
        } else {
            audioFile.play()
        }
    }

    const iconPlay = () => {
        if (!isPaused) {
            setPlayIcon(<PlayArrowIcon/>)
        } else {
            setPlayIcon(<PauseIcon/>)
        }
    }

    React.useEffect(() => {
        audioFile.src=currentSong.songSource
    }, [currentSong])
    // Whenever the currentSong changes then provide an updated currentSong song source

    const replay = () => {
        audioFile.pause() 
        setPlayIcon(<PlayArrowIcon/>)
        audioFile.currentTime = 0
        audioFile.play()
        setPlayIcon(<PauseIcon/>)    
    }

    return (
        <div>

            <Button id='replayButton' variant="contained" color="primary"
                    onClick={() => {{replay()}}}>
                <ReplayIcon/>
            </Button>

            <Button id='previousButton' variant="contained" color="primary"
                    onClick={() => {decrement() ; audioPlay(); console.log("from dec " + songNum)}}> 
                <SkipPreviousIcon/>
            </Button>

            <Button id='playButton' variant="contained" color="primary" 
                    onClick={() => {audioPlay(); togglePlay(); iconPlay(); console.log(songNum)}}>
                {playIcon}
            </Button>

            <Button id='skipButton' variant="contained" color="primary"
                    onClick={() => {iterator(); audioPlay(); console.log("from incre " + songNum)}}>
                <SkipNextIcon/>
            </Button>

            <Button id='shuffle' variant="contained" color="primary"
                    onClick={() => {shuffle(allSongs)}}>
                <ShuffleIcon/>
            </Button>

            {/* {allSongs.map(song => {
                return <pre>{JSON.stringify(song)}</pre>
            })} */}

        </div>
    )
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    isPaused: state.isPaused,
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

