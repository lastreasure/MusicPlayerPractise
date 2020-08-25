import { createSlice } from '@reduxjs/toolkit';

const mpSlice = createSlice({
    // Name used in action types
    name: 'MUSIC_PLAYER',
    // Initial state for the reducer to use
    initialState: {},
    // An object of reducers whoms name will generate an action
    reducers: {
        TOGGLE_PLAY: (state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }),
        GET_SONGS_REQUEST: (state) => ({ // loading variable 
            ...state
        }),
        GET_SONGS_SUCCESS: (state, action) => ({ 
            ...state,
            allSongs: action.payload,
            currentSong: action.payload[0] || {} // if not set then return empty object
            
        }),
        GET_SONGS_FAILURE: (state, action) => ({ // cancel loader then show error response
            ...state,
            error: action.payload
        }),
        SET_CURRENT_SONG: (state, action) => ({
            ...state,
            currentSong: state.allSongs[action.payload]
        }),
        NEXT_SONG: (state, action) => ({
            ...state,
            currentSong: state.allSongs[action.payload]
        }),
    }
})

// destructuring th e actions from the slice
export const {TOGGLE_PLAY, GET_SONGS_SUCCESS, GET_SONGS_REQUEST, GET_SONGS_FAILURE, NEXT_SONG} = mpSlice.actions;

// FETCHING SONGS
export const getSongs = () => dispatch => {
    dispatch(GET_SONGS_REQUEST())
    fetch('http://localhost:5000/songs')
    .then(res => res.json())
    // dispatch the state to the reducer
    .then(songs => dispatch(GET_SONGS_SUCCESS(songs)))
    .catch((error) => dispatch(GET_SONGS_FAILURE(error)));
}

export default mpSlice;