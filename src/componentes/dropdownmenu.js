import React from 'react';
import './DropDownMenu.css';
import {connect} from "react-redux";
import changePage from "../redux/pageActions.js"

class DropDownMenu extends React.Component {

    render(){
        return(
            <div class="navbar">
                <a href="#home">Home</a>
                <a href="#about">Sobre os Guri</a>
                <div class="dropdown">
                    <button class="dropbtn">Conteúdos Por Matéria:
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#ingles">Inglês</a>
                        <a href="#portugues">Português</a>
                        <a href="#espanhol">Espanhol</a>
                        <a href="#ads">ADS</a>
                        <a href="#progg">Programação</a>
                    </div>
                </div>
            </div>
        )
    } 
}


export default DropDownMenu;
