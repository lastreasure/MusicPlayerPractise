import { createSlice } from '@reduxjs/toolkit';

const mpSlice = createSlice({
    name: 'MUSIC_PLAYER',
    initialState: {},
    reducers: {
        TOGGLE_PLAY: (state) => ({
            ...state,
            isPlaying: !state.isPlaying
        })
    }
})

export const {TOGGLE_PLAY} = mpSlice.actions;

export default mpSlice;