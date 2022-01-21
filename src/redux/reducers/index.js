import { changethenumber } from './upDown';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    changethenumber: changethenumber
})

export default rootReducer;