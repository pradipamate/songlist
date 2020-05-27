import SongsListReducer from './Songslistreducer';
import {combineReducers} from 'redux';

export default combineReducers({
    Songlist:SongsListReducer,
    
})