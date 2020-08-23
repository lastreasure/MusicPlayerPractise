import React, { Component } from 'react'
import { connect } from 'react-redux'; 
// retrieve action from mpActions
import { play } from '../../actions/mpActions'


class Play extends Component {

    render() {
    
        let audio = new Audio('Dont_Worry_Be_Happy.mp3')
        
        return (
            <div>
                <button onClick={()=> this.props.play(audio)}> play</button>
            </div>
        )
    }
}

// Retrieve state from redux and map to properties to the component to use inside the component
const mapStateToProps = state => ({
    play: state.musicplayer.isPlaying
})

export default connect(mapStateToProps, {play})(Play);




// render() {
    
//     let audio = new Audio('Dont_Worry_Be_Happy.mp3')

//     return (
//         <div>
//             {/* <button onChange={this.onChange} value={this.state.playing} >play</button> */}
//             <button onClick={()=> this.props.play(audio)}> play</button>
//             {/* <audio>
//                 <source src="Dont_Worry_Be_Happy.mp3"></source>
//             </audio> */}
//             {/* <button onClick={this.gotPlay()}> play</button> */}
//             {/* <audio src={require(`../../assets/songList/Don't_Worry_Be_Happy.mp3`)}></audio> */}
//         </div>
//     )
// }
// }






//////////


    // componentDidMount() {
    //     this.props.play();
    // }

    // isPlaying() {
    //     // const isPlay = this.state.playing;
    //     const isPlay = this.state.playing === false ? true : false;
    //     this.setState({ playing: isPlay});
    //     console.log(this.state.playing)

    // }

    // componentDidMount(){
    //     // let audio = new Audio(audioFile);
    //     // console.log(audioFile)
    // }

    // play() {
    //     let audio = new Audio(`../assets/songList/Dont_Worry_Be_Happy.mp3`);
    //     audio.play();
    // }


       // playAudio() {
    //     const audioEl = document.getElementsByClassName("audio-element")[0]
    //     audioEl.play()
    //     console.log(audioEl)
    // }

    // render() {
    // return (
    //     <div>
    //     <button onClick={this.playAudio}>
    //         <span>Play Audio</span>
    //     </button>
    //     <audio className="audio-element">
    //         <source src="Dont_Worry_Be_Happy.mp3"></source>
    //     </audio>
    //     </div>
    // )
    // }
    // componentDidMount() {
    //     this.props.play();
    // }