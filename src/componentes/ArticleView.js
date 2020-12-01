import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
    //console.log(state.pageReducer.pagina);
    return {pagina: state.pageReducer.pagina};
}

class ArticleView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        //console.log(this.props)
        return(
        <p>sexo{this.props.pagina}</p>
        )
    }
}


export default connect(mapStateToProps, null)(ArticleView);
//export default ArticleView;