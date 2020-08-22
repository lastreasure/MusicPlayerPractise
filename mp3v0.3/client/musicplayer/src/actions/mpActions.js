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