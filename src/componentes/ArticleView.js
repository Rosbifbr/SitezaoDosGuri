import React from 'react';
import { connect } from "react-redux";
import './ArticleView.css';
import pedrao from "./imagens/Pedro Kilkerry - Biografia.png"


const mapStateToProps = state => {
    //console.log(state.pageReducer.pagina);
    return {pagina: state.pageReducer.pagina};
}

class ArticleView extends React.Component {

    render(){
        switch(this.props.pagina){
            default:    
                return(
                    <div class='main'>
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
                    <div class='main'>
                        <h2 class='artitle'>Sobre o Nosso Site</h2>
                        <p class='artext'>Site e conteúdo desenvolvidos em novembro de 2020 por Rodrigo Ourique e Gustavo Matos, no terceiro módulo das 
                            APNPs(Atividades Pedagógicas Não Presenciais) do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul campus Osório.</p>
                    </div>
                )
            case "english":
                return(
                    <div class='main'>
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
                    <div class='main'>
                        <h2 class="artitle">Podcast - Antônio Feijó e o Contexto do Movimento Parnasianista</h2>
                        <iframe src="https://drive.google.com/file/d/1KNj4ME6w12ZAoiOUn6cbTxpML1ZWT0BG/preview" width="350" height="200"></iframe>
                    </div>
                )
            case "portuguese2":
                return(
                    <div class='main'>
                        <h2 class="artitle">Imagem Biográfica de Pedro Kilkerry</h2>
                        <img width="40%" height="auto" src={pedrao}
                        alt="
                        PEDRO KILLKERRY
                        Advogado, jornalista e
                        poeta simbolista
                        brasileiro.
                        
                        FORMAÇÃO
                        Bacharel em Ciências
                        Jurídicas e Sociais na
                        Faculdade de Direito da
                        Bahia, em 1913
                        
                        NATURALIDADE
                        Salvador BA, 1885 – 1917

                        BIOGRAFIA
                        Pedro Kilkerry, nascido em Salvador no
                        ano de 1885, formou-se bacharel em
                        Ciências Jurídicas e Sociais na
                        Faculdade de Direito da Bahia, em
                        1913. Nesta época, Pedro já atuava
                        como colaborador de várias revistas,
                        como a Nova Cruzada, Os Anais, Via
                        Láctea, A Voz do Povo, entre outros os
                        quais publicou a série de crônicas
                        Quotidianas - Kodaks. Foi advogado e
                        escriturário da Repartição de
                        Contabilidade do Tribunal de Contas de
                        Salvador. O poeta simbolista não
                        publicou nenhum livro em vida. Apenas
                        em 1971 ocorreu a publicação póstuma
                        de 36 dos seus poemas, no livro
                        ReVisão de Kilkerry, de Augusto de
                        Campos. Para o mesmo, &quot;Kelkerry não
                        só compreendeu mais conscientemente
                        que outros simbolistas o papel
                        desempenhado na crianção pelo
                        subconsciente, como soube levar mais
                        longe a liberdade de associação
                        imagética. Por outro lado, a capacidade
                        de síntese, assim como a consciência
                        das limitações da sintaxe ordinária,
                        são mais aguadas em Kilkerry do que
                        em qualquer outro poeta do nosso
                        Simbolismo&quot;
                        "
                        />
                    </div>
                )
            case "spanish":
                return(
                    <div class='main'>
                        <h2 class="artitle">El Poder de Comunicación en la Literatura Durante Los Siglos</h2>
                        <div class="artext">
                            <p>
                            Desde el invento de la escritura, la literatura ha sido la más eficiente forma de codificación, difusión y inventario de cuentos 
                            y narrativas, sean ellos reales o no. La literatura ha conferido incontables vivencias de reyes, héroes, bandidos, locos y criminales
                             la capacidad de transponer las barreras de la vida y comunicarse con personas ordinarias con sus vidas separadas por siglos enteros.
                            </p>
                            <p>
                            Durante su evolución, la literatura ha sufrido innúmeras transformaciones, como el invento de la prensa, que permitió capacidad mucho más grande 
                            de reproducción y difusión de material literario, pero su esencia y su papel dominante en la transmisión de conocimientos a través de la 
                            historia continuaron siendo incontestables por todos esos años, por lo menos hasta el advento de la internet y otros medios de comunicación y 
                            difusión de media.
                            </p>
                            <p>
                            La internet ha cambiado muchas cosas, y la Literatura ciertamente es una de ellas. Al mismo tiempo en que la literatura 
                            ha encontrado nuevos medios para ser comunicada y mantener viva su tradición, ella ha sufrido una competencia cada vez 
                            más fuerte con otros medios de transmisión de cuentos, muchas veces más rasos, pero con artificios y recursos visuales 
                            más interesantes y fáciles de comprender.

                            </p>
                            <p>
                            Mientras estos otros medios de comunicación son candidatos dignos para buenos transmisores de cuentos y vivencias, ninguno 
                            de ellos transmite los cuentos con la misma profundidad, detalle y precisión que la literatura. En una sociedad con una 
                            attention span cada vez más corta, vemos toda la riqueza y el detalle de la literatura puestos en jaque, cuando está  para 
                            competir con medios más sencillos y visualmente apelativos de transmisión de información.
                            </p>
                        </div>                  
                    </div>
                )
        }    
    }
}


export default connect(mapStateToProps, null)(ArticleView);
//export default ArticleView;