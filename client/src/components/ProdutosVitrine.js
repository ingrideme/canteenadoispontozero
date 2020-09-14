import React, { useState, useEffect } from 'react';
import './ProdutosVitrine.css';
import axios from 'axios';
import Vitrine from './Produtos';


const ProdutosVitrine = () => {
	const [users, setUsers ] = useState([]);

	const getUsers = async () => {
		const res = await axios.get('/api/users');
		console.log ( res.data.users );
		setUsers(res.data.users);
	}

	useEffect(() => {
		getUsers();
	}, []);

	const allUsers = users.length > 0 && users.map ( (user, index) => {
		return <li key="{index}">Nome: {user.name} // Email: {user.email}  </li>
	})

	const message = users.length > 0 ? "Todos os Usuarios" : "Não há usuários cadastrados";

    return (
             <div className="vitrines">	
				<Vitrine/>
				<Vitrine/>
				<Vitrine/>
				<Vitrine/>
				<Vitrine/>
				<Vitrine/>
				<Vitrine/>
		     </div>
			)
}

export default ProdutosVitrine;
