import React from 'react'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const ControlPanel = () => {


    return (
        <div>  
            <Button variant="contained" color="primary">
                <SkipPreviousIcon/>
            </Button>

            <Button variant="contained" color="primary">
                <PlayArrowIcon/>
            </Button>

            <Button variant="contained" color="primary">
                <SkipNextIcon/>
            </Button>

        </div>
    )
}

export default ControlPanel;


