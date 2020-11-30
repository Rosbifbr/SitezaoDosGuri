

const pageReducer = (state = {pagina: "home"}, action) => {
    switch(action.type){
        case 'page/change':
            return {pagina: action.page}
        default:
            return {pagina: "404"}
    }
}

export default pageReducer;