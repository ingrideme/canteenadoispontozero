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
import Pedidos from './components/PaginasLogado/Pedidos';
import Perfil from './components/PaginasLogado/Perfil';
import Carteira from './components/PaginasLogado/Carteira';
import Carrinho from './components/PaginasLogado/Carrinho';


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
          <Route exact path="/pedidos" component={Pedidos}/>       
          <Route exact path="/perfil" component={Perfil}/>       
          <Route exact path="/carteira" component={Carteira}/>       
          <Route exact path="/carrinho" component={Carrinho}/>       
        </Switch>   


        </div>
</BrowserRouter>

    );  

}

export default App;
