import React, { Component } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Layout />
                <div className="container c-min-90">

                    {/* Codificar aqui */}

                    <h1>Cadastro de Colaboradores</h1>

                    {/* Fim */}
                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default A;