import { combineReducers } from 'redux';
import grid from './gridReducer';
import app from './appReducer';

export default combineReducers({
 grid,
 app
});