import React, { Component } from 'react';
import Layout from '../components/Layout';
import Dados from './Contato/Dados';
import Informacoes from './Contato/Informacoes';
import Footer from './Footer';

class Contato extends Component {
    render() {
        return (
            <div>
                <Layout />
                <div className="container c-min-90">
                    <h3 className="c-title">Fale Conosco</h3>
                    <hr className="c-background-purple c-border-purple"></hr>
                    <div className="row">
                        <div className="col-md mb-4">
                            <h4 className="c-title mt-2">Envie uma Mensagem</h4>
                            <Dados />
                        </div>
                        <div className="col-md">
                            <h4 className="c-title mt-2 mb-3">Informações</h4>
                            <Informacoes />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contato;