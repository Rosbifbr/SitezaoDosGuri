import React from 'react';
import './DropDownMenu.css';
import {connect} from "react-redux";
import { changePage } from '../redux/actions';

const mapDispatchToProps = (dispatch) =>{
    return {changePage: page => dispatch(changePage(page))};
}

class DropDownMenu extends React.Component {
constructor(props){
    super(props);
    this.state = {

    }
}

    render(){
        return(
            <div class="navbar">
                <div class="navcontent">
                    <a onClick={() => this.props.changePage("home")} href="#home">Home</a>
                    <a onClick={() => this.props.changePage("about")} href="#about">Sobre</a>
                    <div class="dropdown">
                        <button class="dropbtn">Artigos e Trabalhos:
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a onClick={() => this.props.changePage("english")} href="#ingles">Emprego do Reported Speech em Inglês</a>
                            <a onClick={() => this.props.changePage("portuguese")} href="#portugues">Podcast Sobre Parnasianismo e Antônio Feijó</a>
                            <a onClick={() => this.props.changePage("portuguese2")} href="#portugues2">Imagem Biográfica de Pedro Kilkerry</a>
                            <a onClick={() => this.props.changePage("spanish")} href="#espanhol">El Poder de Comunicación en la Literatura Durante Los Siglos</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default connect(null, mapDispatchToProps)(DropDownMenu);
//export default DropDownMenu;
