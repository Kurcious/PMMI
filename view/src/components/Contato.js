import React, { Component } from 'react';
import Layout from '../components/Layout';
import Dados from './Contato/Dados';
import Informacoes from './Contato/Informacoes';

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
                            <Dados />
                        </div>

                        <div className="col-md">
                            <h3 className="c-title mt-2 mb-3">Informações</h3>
                            <Informacoes />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contato;