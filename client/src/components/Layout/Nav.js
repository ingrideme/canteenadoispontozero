import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import DeslogadoLinks from './DeslogadoLinks'
import LogadoLinks from './LogadoLinks';
import Logo  from '../imagens/Logo.png';
import Form from '../Form';
import ProdutosVitrine from '../ProdutosVitrine';


const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
      <Link to='/' > <img src={Logo}/></Link>
      </div>

      <ul>
      <Link className="links" to='/' >Home</Link>
      <Link  className="links" to='/sobre'>Sobre Nós</Link>
      <Link  className="links" to='/produtos' >Produtos</Link>
      <Link  className="links" to='/logado' >Logado</Link>
      </ul>
    </div>
  )
}

export default Nav