import { combineReducers } from 'redux';
import songsReducer from './songsReducer';

export default combineReducers({
    musicplayer: songsReducer
})