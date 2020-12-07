import React from 'react';
import { connect } from "react-redux";
import rodrigo from '../site-content/rodrigo.jpg'
import './ArticleView.css';


const mapStateToProps = state => {
    //console.log(state.pageReducer.pagina);
    return {pagina: state.pageReducer.pagina};
}

class ArticleView extends React.Component {

    render(){
        switch(this.props.pagina){
            default:    
                return(
                    <div>
                        <h2 class="artitle">Bem Vindo ao Nosso Site!</h2>
                        <p>Conteudo de Casa</p>
                    </div>
                )
            case "about":
                return(
                    <div>
                        <img style={{margin:"auto"}, {width:"50px"}, {height:"50px"}} src={rodrigo}/>
                        <p>Site e conteúdo desenvolvidos por Rodrigo Ourique e Gustavo Matos</p>
                    </div>
                )
            case "english":
                return(
                    <div>
                        <p>Inglesss</p>
                    </div>
                )
            case "portuguese":
                return(
                    <div>
                        <p>Portuga</p>
                    </div>
                )
            case "spanish":
                return(
                    <div>
                        <p>Espanholito</p>
                    </div>
                )
        }    
    }
}


export default connect(mapStateToProps, null)(ArticleView);
//export default ArticleView;