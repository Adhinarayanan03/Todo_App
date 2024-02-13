// reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './taskreducers';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
