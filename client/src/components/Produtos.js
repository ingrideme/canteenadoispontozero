import './Produtos.css'
import React from 'react'
import Contador from '../contador/Contador'

export default function Vitrine() {
    return (
        <div className="vitrine">
            <div className="imagem-produto">
                <h2>Imagem</h2>
            </div>
            <div className="nome-produto">
                <h3>Nome do Produto</h3>
            </div>
            <div className="info-produto">
                <p>Informações do produto.</p>
            </div>
            <div className="vitrine-contador">
                <Contador numeroInicial={0} />
            </div>
        </div >
    )
}