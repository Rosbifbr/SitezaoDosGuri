import { combineReducers } from 'redux';

import pageReducer from './pageReducer.js';


    const rootReducer = combineReducers({

        pages: pageReducer,

    });

    export default rootReducer;