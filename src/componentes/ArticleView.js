import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {page: state.pagina};
}

class ArticleView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }
    
    render(){console.log(this.state.page);
        return(
        <p>sexo</p>
        )
    }
}


export default connect(mapStateToProps, null)(ArticleView);
//export default ArticleView;