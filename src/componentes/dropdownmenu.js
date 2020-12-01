import React from 'react';
import './DropDownMenu.css';
import {connect} from "react-redux";
import {pageReducer} from '../redux/reducers';
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
                <a onClick={() => this.props.changePage("home")} href="#home">Home</a>
                <a onClick={() => this.props.changePage("about")} href="#about">Sobre os Guri</a>
                <div class="dropdown">
                    <button class="dropbtn">Conteúdos Por Matéria:
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a onClick={() => this.props.changePage("english")} href="#ingles">Inglês</a>
                        <a onClick={() => this.props.changePage("portuguese")} href="#portugues">Português</a>
                        <a onClick={() => this.props.changePage("spanish")} href="#espanhol">Espanhol</a>
                    </div>
                </div>
            </div>
        )
    } 
}

export default connect(null, mapDispatchToProps)(DropDownMenu);
//export default DropDownMenu;
