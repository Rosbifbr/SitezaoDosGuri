
import { combineReducers } from 'redux';


import counterReducer from './Counter/counter.reducer';
import pageReducer from './pageReducer';


const rootReducer = combineReducers({

    pages: pageReducer,

});

export default rootReducer;