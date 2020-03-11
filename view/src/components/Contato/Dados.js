import React, { Component } from 'react';

class Dados extends Component {

    submitForm (e) {
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="form-group mt-3">
                    <label htmlFor="txtNome">Nome</label>
                    <input id="txtNome" name="txtNome" className="form-control" type="text" placeholder="Digite seu nome completo"></input>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="txtEmail">Email</label>
                    <input id="txtEmail" name="txtEmail" className="form-control" type="email" placeholder="Digite seu email"></input>
                    <small className="form-text text-muted">Suas dúvidas serão respondidas através desse email, portanto utilize um email real.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="txtAssunto">Assunto</label>
                    <input id="txtAssunto" name="txtAssunto" className="form-control" type="text" placeholder="Qual o assunto da sua mensagem?"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="txtMensagem">Mensagem</label>
                    <textarea id="txtMensagem" name="txtMensagem" className="form-control" placeholder="O que gostaria de nos dizer?"></textarea>
                </div>
                <button onClick={this.submitForm} type="submit" className="btn btn-dark c-background-purple c-background-purple-hover">Enviar</button>
            </form>
        );
    }
}

export default Dados;