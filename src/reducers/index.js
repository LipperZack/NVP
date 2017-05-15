import { combineReducers } from 'redux';
import nodes from './nodeReducer';

const rootReducer = combineReducers({
  nodes
});

export default rootReducer;
