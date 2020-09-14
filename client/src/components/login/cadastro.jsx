import React from 'react';
import loginImg from '../imagens/login.png';

export class Cadastro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
                return (
              <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Cadastre-se</div>
                <div className="content">
                    <div className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="senha">Senha </label>
                      <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="senha">Confirme sua senha </label>
                      <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="senha">CPF </label>
                      <input type="text" name="cpf" placeholder="CPF" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ra">RA </label>
                      <input type="text" name="ra" placeholder="RA" />
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <button type="button" className="btn">
                    Cadastrar
                  </button>
                </div>
              </div>
            );
    }
}
