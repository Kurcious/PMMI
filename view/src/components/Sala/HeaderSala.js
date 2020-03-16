import React, { Component } from 'react';

class HeaderSala extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h3 className="c-title">{this.props.nome}</h3>
                <hr className="c-border-purple" />
                <p>
                    {this.props.desc}
                </p>

            </div>
        );
    }
}

export default HeaderSala;
