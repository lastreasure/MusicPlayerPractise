import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

class ControlPanel extends Component {

    constructor(props) {
        super(props);
        this.state = { play: false }
    }

    componentWillReceiveProps() {
        this.setState({ play: false });
    };

    play = (audio) => {
        if (this.state.play) {
            audio.pause();
            this.setState({ play: false });
        } else {
            audio.play();
            this.setState({ play: true });
        }
    }

    render() {

        console.log(this.props.audioSource)
        // let audioFile = new Audio(this.props.audioSource)

        return (

            <div>  
                <audio src={this.props.audioSource} ref={(audio) => {this.audio=audio}} />

                <Button variant="contained" color="primary">
                    <SkipPreviousIcon/>
                </Button>

                <Button variant="contained" color="primary" onClick={() => this.play(this.audio)}>
                    {!this.state.play ? <PlayArrowIcon/> : <PauseIcon/> }
                </Button>

                <Button variant="contained" color="primary">
                    <SkipNextIcon/>
                </Button>

            </div>
        )
    }
}

export default ControlPanel;







// import React, {useState} from 'react'
// import Button from '@material-ui/core/Button'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import PauseIcon from '@material-ui/icons/Pause';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

// function ControlPanel (audioSource) {

//     // const [state, setState] = useState({isplaying: false})
//     // const isplaying = state.isplaying;


//     // function play(audioFile) {
//     //     if(!isplaying) {
//     //         audioFile.play()
//     //         setState(!isplaying);
//     //         audioFile.pause()
//     //         setState(!isplaying);
//     //     }
//     // }

//     console.log(audioSource.audioSource)
//     let audioFile = new Audio(audioSource.audioSource)

//     return (

//         <div>  
//             <Button variant="contained" color="primary">
//                 <SkipPreviousIcon/>
//             </Button>

//             <Button variant="contained" color="primary" onClick={() => audioFile.play()}>
//                 <PlayArrowIcon/>
//             </Button>

//             <Button variant="contained" color="primary" onClick={() => audioFile.pause()}>
//                 <PauseIcon/>
//             </Button>

//             <Button variant="contained" color="primary">
//                 <SkipNextIcon/>
//             </Button>

//         </div>
//     )
// }

// export default ControlPanel;