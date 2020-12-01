import {CHANGE_PAGE} from './actiontypes.js';


export const changePage = payload => {
    return{type: CHANGE_PAGE, payload};
}