import React from 'react';
import { connect } from "react-redux";
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
                        <h2 class="artitle">Emprego do Reported Speech em Inglês</h2>
                        <p class="artext">Beginning in the late 1870s as a response to Romanticism and continuing into the 
                        early part of the 20th century, Parnassianism surfaced as a poetry movement advocating “art for art’s sake.” 
                        Primarily opposed to Romanticism’s unbridled sensibility and unrestrained poetic forms, Parnassianism 
                        heralded artistic control, polish, elegance, objectivity, and impassiveness. The three outstanding Parnassian 
                        poets of Brazil are Raimundo Correia, Alberto de Oliveira, and Olavo Bilac. Symbolism evolved from Romanticism 
                        in the late 19th century and employed the imaginative use of extended metaphors suggestive of reveries and mystical 
                        states. Influenced by the French poet Charles Baudelaire and his theme of decadence, Symbolists in Brazil also experimented 
                        with metrics, repetition, sound effects, and other musical elements. The greatest Brazilian Symbolist poet was João da Cruz 
                        e Sousa, born to freed slaves, who wrote abolitionist verse and was active in the antislavery movement.</p>

                        <p class="artext"><i>Source: https://www.britannica.com/art/Brazilian-literature/The-19th-century</i></p>
                        <ol class="artext">
                            <li>
                                <ul>
                                    <li>Parnassianism surfaced as a poetry movement advocating “art for art’s sake.”</li>
                                    <li>The text informed us that Parnassianism surfaced as a poetry movement advocating “art for art’s sake.”</li>
                                </ul>
                            </li><br/>
                            <li>
                                <ul>
                                    <li>The greatest Brazilian Symbolist poet was João da Cruz e Sousa, born to freed slaves</li>
                                    <li>The text said that the greatest Brazilian Symbolist poet was João da Cruz e Sousa, who was born to freed slaves.</li>
                                </ul>
                            </li><br/>
                            <li>
                                <ul>
                                    <li>Parnassianism heralded artistic control, polish, elegance, objectivity, and impassiveness.</li>
                                    <li>The author mentioned that Parnassianism heralded artistic control, polish, elegance, objectivity, and impassiveness.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            case "portuguese":
                return(
                    <div>
                        <h2 class="artitle">Podcast - Antônio Feijó e o Contexto do Movimento Parnasianista</h2>
                        <iframe src="https://drive.google.com/file/d/1KNj4ME6w12ZAoiOUn6cbTxpML1ZWT0BG/preview" width="350" height="200"></iframe>
                    </div>
                )
            case "portuguese2":
                return(
                    <div>
                        <h2 class="artitle">Imagem Biográfica de um Autor Simbolista</h2>
                        <p class="artext">Abcdefg placeholder</p>
                    </div>
                )
            case "spanish":
                return(
                    <div>
                        <h2 class="artitle">Espanholito</h2>
                        <p class="artext">Coco odeio espanhol</p>
                    </div>
                )
        }    
    }
}


export default connect(mapStateToProps, null)(ArticleView);
//export default ArticleView;