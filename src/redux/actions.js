import {CHANGE_PAGE} from './actiontypes.js';


export const changePage = page => {
    return{
        type: CHANGE_PAGE,
        payload: {pagina: page}
    };
}