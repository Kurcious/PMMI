import React, { Component } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';

class C extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Layout />
                <div className="container c-min-90">

                    {/* Codificar aqui */}

                    <h1>Controle de Estado das Salas</h1>

                    {/* Fim */}
                    
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default C;