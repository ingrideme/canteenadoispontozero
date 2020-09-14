import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const DeslogadoLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to='/'>Cadastre-se</NavLink></li>            
        <li><NavLink to='/'>Login</NavLink></li>                            
        </ul>       
        )
}


export default DeslogadoLinks
