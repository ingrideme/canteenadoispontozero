import React from 'react';
import loginImg from '../imagens/login.png';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
                return (
              <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                  <div className="image">
                    <img src={loginImg} />
                  </div>
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="senha">Senha </label>
                      <input type="password" name="senha" placeholder="Senha" />
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <button type="button" className="btn">
                    Login
                  </button>
                </div>
              </div>
            );
    }
}
