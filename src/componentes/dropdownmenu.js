import React from 'react';
import ReactDOM from 'react-dom';
import './DropDownMenu.css';

class DropDownMenu extends React.Component {
    
    state = {pagina: ""};

    changepage = (pageinfo) => {
        this.setState({pagina: pageinfo})
    }

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
