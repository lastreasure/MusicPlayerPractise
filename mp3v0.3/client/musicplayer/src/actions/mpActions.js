import { GET_SONGS, PLAY } from './types';


// thunk middleware allows calling of dispatch directly for async requests
// dispatch is like a resolver/promise
export const getSongs = () => dispatch => {
    console.log("getting songs");
    fetch('http://localhost:5000/songs')
    .then(res => res.json())
    // dispatch the state to the reducer
    .then(songs => dispatch({
        type: GET_SONGS,
        payload: songs
    }));
}

export const play = (audio) => dispatch => { 
    console.log("from mpactions play "+ audio.paused)
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    dispatch( {
        type: PLAY,
        payload: audio.paused
    })
}


// export function play(audio) {
//     if (!this.isPlaying) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
//     return {
//         type: PLAY,
//         payload: audio.isPlaying
//     }
// }


    // const isPlay = this.isPlaying === false ? true : false;
    // console.log(this.isPlaying);
    // if(isPlay) {