import React, { Component } from 'react';
import Layout from '../components/Layout';

class Contato extends Component {
    render() {
        return (
            <div>
                <Layout />
                <div className="container">
                    <h1 className="c-title">Fale Conosco</h1>
                    <hr className="c-background-purple c-border-purple"></hr>
                    <div className="row">
                        
                        <div className="col-md mb-4">
                            <h3 className="c-title mt-2">Envie uma Mensagem</h3>
                            <form>
                                <div className="form-group mt-3">
                                    <label for="txtNome">Nome</label>
                                    <input id="txtNome" name="txtNome" className="form-control" type="text" placeholder="Digite seu nome completo"></input>
                                </div>
                                <div className="form-group mt-4">
                                    <label for="txtEmail">Email</label>
                                    <input id="txtEmail" name="txtEmail" className="form-control" type="email" placeholder="Digite seu email"></input>
                                    <small className="form-text text-muted">Suas dúvidas serão respondidas através desse email, portanto utilize um email real.</small>
                                </div>
                                <div className="form-group">
                                    <label for="txtAssunto">Assunto</label>
                                    <input id="txtAssunto" name="txtAssunto" className="form-control" type="text" placeholder="Qual o assunto da sua mensagem?"></input>
                                </div>
                                <div className="form-group">
                                    <label for="txtMensagem">Mensagem</label>
                                    <textarea id="txtMensagem" name="txtMensagem" className="form-control" placeholder="O que gostaria de nos dizer?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary c-background-purple c-background-purple-hover">Enviar</button>
                            </form>
                        </div>

                        <div className="col-md">
                            <h3 className="c-title mt-2 mb-3">Informações</h3>

                            <p className="text-muted">Telefones:<br/>
                            (00) 0000-0000<br/>
                            (88) 8888-8888</p>

                            <p className="text-muted mt-5">Museu Municipal de Itápolis<br/>
                            Av. Sete de Setembro, 687<br/>
                            Centro, Itápolis - SP<br/>
                            14900-000</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contato;