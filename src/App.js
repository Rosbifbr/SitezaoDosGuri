//import logo from './logo.svg';
import './App.css';
import DropDownMenu from './componentes/dropdownmenu.js';
import ArticleView from './componentes/ArticleView.js';
import React from 'react';


class App extends React.Component {

  state = {pagina: ""};

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Site dos Guri</h1>
          <DropDownMenu/>
        </header>
        <ArticleView/>
      </div>
    );
  }
}

export default App;
