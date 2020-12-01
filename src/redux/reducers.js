import {CHANGE_PAGE} from './actiontypes.js';

const inistate = {
    pagina: "home"
}

export const pageReducer = (state = inistate, action) =>{
    console.log(action.payload);
    switch (action.type){
        case CHANGE_PAGE:
            return Object.assign({}, state, {pagina: action.payload.pagina});
        default:
            return state;
    }
}