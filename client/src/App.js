import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import ProdutosVitrine from './components/ProdutosVitrine';
import Form from './components/Form.jsx';
import Contador from './contador/Contador';
import './App.css';
import { Login } from './components/login/index';
import Sobre from './components/Sobre';
import LogadoLinks from './components/Layout/LogadoLinks';


function App() {
    return  (
<BrowserRouter>
        <div className="App">
         <Nav/>
        <Switch>
          <Route exact path="/" component={Form}/>
          <Route exact path="/sobre" component={Sobre}/>
          <Route exact path="/produtos" component={ProdutosVitrine}/>       
          <Route exact path="/logado" component={LogadoLinks}/>       
        </Switch>   


        </div>
</BrowserRouter>

    );  

}

export default App;
