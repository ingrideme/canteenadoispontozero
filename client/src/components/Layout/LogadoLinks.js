import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';
import Logo  from '../imagens/Logo.png';

const LogadoLinks = () => {
    return (
      <div>
  
        <li><NavLink to='/perfil'>Meu Perfil</NavLink></li>     
        <li><NavLink to='/pedidos'>Meus Pedidos</NavLink></li>            
        <li><NavLink to='/carteira'>Carteira</NavLink></li>            
        <li><NavLink to='/carrinho'>Carrinho</NavLink></li> 
        <li><NavLink to='/produtos'>Produtos</NavLink></li>            
        </div>               
                )
}

export default LogadoLinks
