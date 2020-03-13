import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="navbar-nav ml-auto">
                <a href="#!" className="nav-item nav-link text-white c-link-hover c-navbar-text-size" data-toggle="modal" data-target="#loginModal">Entrar / Criar Conta</a>
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title c-title" id="exampleModalLabel">Fazer Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email" type="email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Senha" type="password"></input>
                                    </div>
                                    <small>Não possui uma conta? <a href="#!">Clique aqui</a> para cadastrar-se!</small>
                                    <br/>
                                    <small><a href="#!">Esqueci minha senha.</a></small>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-dark c-background-purple c-background-purple-hover">Entrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;