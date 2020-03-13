import React, { Component } from 'react';

class Atracao extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card mb-4 text-dark" style={{ width: 100 + '%', cursor: 'pointer' }}>
                <img className="card-img-top" src={this.props.img_url} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title c-title">{this.props.nome}</h5>
                    <p className="card-text">{this.props.descricao}</p>
                </div>
            </div>
        );
    }
}

export default Atracao;