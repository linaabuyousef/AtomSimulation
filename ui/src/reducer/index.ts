import {combineReducers} from "redux";
import {electron} from './electron';

export default combineReducers({
    electronState: electron
})