import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            home: "",
            salas: "",
            reserva: "",
            contato: ""
        }
    }
    
    componentDidMount() {
        let url = window.location.pathname.replace("/", "")
        this.setState({
            home: "",
            salas: "",
            reserva: "",
            contato: "",
        })
        if (url === "inicio" || url === "") { this.setState({home: "c-active"}) }
        if (url === "salas") { this.setState({salas: "c-active"}) }
        if (url === "reserva") { this.setState({reserva: "c-active"}) }
        if (url === "contato") { this.setState({contato: "c-active"}) }
    }

    render() {
        return (
            <div className="mb-2">
                <nav className="navbar navbar-expand-lg c-navbar-background">
                    <Link to="/" className="navbar-brand text-white">
                        <img className="mr-1" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png" width="50" height="50" alt="Logo do Museu" /><b>MMI</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-bars fa-2x text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="inicio" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.home} name="home" href="#">Início</Link>
                            <Link to="salas" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.salas} name="salas" href="#">Salas</Link>
                            <Link to="reserva" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.reserva} name="reserva" href="#">Reserva</Link>
                            <Link to="contato" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.contato} name="contato" href="#">Fale Conosco</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Layout;