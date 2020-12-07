import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from "react-redux";
import './ArticleView.css';


const mapStateToProps = state => {
    //console.log(state.pageReducer.pagina);
    return {pagina: state.pageReducer.pagina};
}

class ArticleView extends React.Component {

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render(){
        switch(this.props.pagina){
            default:    
                return(
                    <div>
                        <h2 class="artitle">Bem Vindo ao Nosso Site!</h2>
                        <p class="artext">Nosso site visa ser um repositório sobre todas as coisas relacionadas à literatura
                         e linguagens desenvolvidas em nosso primeiro ciclo das APNPs(correspondente ao primeiro trimestre), em Espanhol, Português e Inglês.
                        No momento, possuímos apenas conteúdo mais relacionado ao movimento literário do parnasianismo, mas nada nos 
                        impede de expandir o escopo do site em algum momento futuro.
                        </p>
                    </div>
                )
            case "about":
                return(
                    <div>
                        {/*<img style={{margin:"auto"}, {width:"50px"}, {height:"50px"}} src={rodrigo}/>*/}
                        <h2 class='artitle'>Sobre o Nosso Site</h2>
                        <p class='artext'>Site e conteúdo desenvolvidos em novembro de 2020 por Rodrigo Ourique e Gustavo Matos, no terceiro módulo das 
                            APNPs(Atividades Pedagógicas Não Presenciais) do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul campus Osório.</p>
                    </div>
                )
            case "english":
                return(
                    <div>
                        <h2 class="artitle">Inglesh</h2>
                        <p class="artext">Inglesss</p>
                    </div>
                )
            case "portuguese":
                return(
                    <div>
                        <h2 class="artitle">Podcast - Antônio Feijó e o Contexto do Movimento Parnasianista</h2>
                    </div>
                )
            case "portuguese2":
                return(
                    <div>
                        <p>Placeholder</p>
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