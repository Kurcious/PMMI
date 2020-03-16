import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

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
        switch (url) {
            case "inicio" || "": this.setState({ home: "c-active" }); break;
            case "salas": this.setState({ salas: "c-active" }); break;
            case "reserva": this.setState({ reserva: "c-active" }); break;
            case "contato": this.setState({ contato: "c-active" }); break;
            case "a": this.setState({ a: "c-active" }); break;
            case "b": this.setState({ b: "c-active" }); break;
            case "c": this.setState({ c: "c-active" }); break;
            case "d": this.setState({ d: "c-active" }); break;
            case "e": this.setState({ e: "c-active" }); break;
            case "f": this.setState({ f: "c-active" }); break;
            default: this.setState({ home: "c-active" });
        }
    }

    render() {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg c-background-purple">
                    <Link to="/" className="navbar-brand text-white">
                        <img className="mr-1" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png" width="50" height="50" alt="Logo do Museu" /><b>PMMI</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-bars fa-2x text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <div className="navbar-nav mr-auto">
                            <Link to="inicio" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.home} name="home">Início</Link>
                            <Link to="salas" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.salas} name="salas">Salas</Link>
                            <Link to="reserva" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.reserva} name="reserva">Reserva</Link>
                            <Link to="contato" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.contato} name="contato">Fale Conosco</Link>
                            <Link to="A" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.a} name="a">A</Link>
                            <Link to="B" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.b} name="b">B</Link>
                            <Link to="C" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.c} name="c">C</Link>
                            <Link to="D" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.d} name="d">D</Link>
                            <Link to="E" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.e} name="e">E</Link>
                            <Link to="F" className={"nav-item nav-link text-white c-link-hover c-navbar-text-size " + this.state.f} name="f">F</Link>
                        </div>
                        <Login /> 
                    </div>
                </nav>

            </div >
        );
    }
}

export default Layout;