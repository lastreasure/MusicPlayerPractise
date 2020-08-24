import { createSlice } from '@reduxjs/toolkit';

const mpSlice = createSlice({
    name: 'MUSIC_PLAYER',
    initialState: {},
    reducers: {
        TOGGLE_PLAY: (state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }),
        GET_SONGS: (state) => ({
            ...state,
            allSongs: []
        })
    }
})

export const {TOGGLE_PLAY, GET_SONGS} = mpSlice.actions;

export default mpSlice;