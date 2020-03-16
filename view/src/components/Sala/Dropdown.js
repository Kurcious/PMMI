import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }
    render() {
        return (
            <li className="nav nav-item dropdown">
                <a href="#!" className="nav-item nav-link text-white c-link-hover c-navbar-text-size dropdown-toggle" role="button" id={this.props.dropdownId} aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" name="">{this.props.dropdownNome}</a>
                <div className="dropdown-menu position-absolute" aria-labelledby={this.props.dropdownId}>
                    {this.props.opcoes.map((opcao) => <a className="dropdown-item" href={opcao.href} key={opcao.a}>{opcao.a}</a>)}
                </div>
            </li>

        );
    }
}

export default Dropdown;