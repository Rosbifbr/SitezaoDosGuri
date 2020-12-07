//import logo from './logo.svg';
import './App.css';
import DropDownMenu from './componentes/dropdownmenu.js';
import ArticleView from './componentes/ArticleView.js';
import React from 'react';


class App extends React.Component {

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h2>O Poder da Comunicação na Literatura</h2>
          <DropDownMenu/>
        </header>
        <ArticleView/>
      </div>
    );
  }
}

export default App;
