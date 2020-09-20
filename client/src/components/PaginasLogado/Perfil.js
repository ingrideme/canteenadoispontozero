import React from 'react';
import './Perfil.css';
import {Link } from 'react-router-dom';
import  conrado  from '../imagens/conrado.PNG';

function Perfil() {
    return (
        
        <body>
            <div className="wrapper">
        <div className="left">
            <img src={conrado} alt="user" width="100"/>
            <h4> O Brabo</h4>
            <p> 3ND</p>
        </div>
        <div className="right">
            <div className="info">
            <h3>Informação</h3>
            <div className="info_data">
                <div className="data">
                    <h5>Email</h5>
                    <p>conrado@email.com</p>
                </div>
                <div className="data">
                    <h5>Telefone</h5>
                    <p>1234567890</p>
                </div>
                </div>
                </div>
             <div className="projects">
            <h3>CANTEENA</h3>
            <div className="projects_data">
                <div className="data">
                    <h5>Saldo</h5>
                    <p>R$ 30,00</p>
                </div>
           
                <div className="data">
                    <h5>Histórico</h5>
                    <Link to='/pedidos'>
                    <p>Histórico</p>
                    </Link>
                    </div>
                    </div>
             
         </div>
         </div>
            </div>
       </body>
        
            
                )
}

export default Perfil
