import { GET_SONGS, PLAY } from '../actions/types';

const initialState = {
    allSongs: []
}

export default function(state = initialState, action) {
    // Takes in the defined action type
    switch (action.type) {
        case GET_SONGS:
            return {
                // spread operator for current state
                ...state,
                allSongs: action.payload
            }
        default: //return current state as default 
            return state;

    }
}