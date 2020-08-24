import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

function ControlPanel (audioSource) {

    // const [state, setState] = useState({isplaying: false})
    // const isplaying = state.isplaying;


    // function play(audioFile) {
    //     if(!isplaying) {
    //         audioFile.play()
    //         setState(!isplaying);
    //         audioFile.pause()
    //         setState(!isplaying);
    //     }
    // }

    console.log(audioSource.audioSource)
    let audioFile = new Audio(audioSource.audioSource)

    return (

        <div>  
            <Button variant="contained" color="primary">
                <SkipPreviousIcon/>
            </Button>

            <Button variant="contained" color="primary" onClick={() => audioFile.play()}>
                <PlayArrowIcon/>
            </Button>

            <Button variant="contained" color="primary" onClick={() => audioFile.pause()}>
                <PauseIcon/>
            </Button>

            <Button variant="contained" color="primary">
                <SkipNextIcon/>
            </Button>

        </div>
    )
}

export default ControlPanel;