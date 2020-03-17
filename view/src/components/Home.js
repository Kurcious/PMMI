import React, { Component } from 'react';
import Atracao from './Home/Atracao';
import dino from './images/dino.jpg'
import pot from './images/pot.jpg'
import { Link } from 'react-router-dom';
import Carrossel from './Home/Carrossel';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className="container c-min-90">
                <div>
                    <h3 className="c-title">Bem Vindo ao Portal do Museu Municipal de Itápolis</h3>
                    <hr className="c-border-purple"></hr>
                    <p>Descrição do Museu: Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                    jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau
                    se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus
					</p>
                    <div className="row">
                        <div className="col col-sm-12 mb-4">
                            <a href="#!" className="btn btn-dark c-background-purple c-background-purple-hover">Agende sua Visita</a>
                        </div>
                        <div className="col col-12 col-md-8 mb-3">
                            <h4 className="c-title">Destaques do Mês</h4>

                            <Carrossel />
                        </div>

                        <div className="col col-sm-12 col-md-4">
                            <h4 className="c-title">Destaques da Semana</h4>
                            <Link to="#!">
                                <Atracao nome="Juras? Que Park?"
                                    descricao="Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                jar pe ritus ifacta pitericit hacquer."
                                    img_url={dino} />
                            </Link>
                            <Link to="#!">
                                <Atracao nome="[Nome da Atração]"
                                    descricao="Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                jar pe ritus ifacta pitericit hacquer."
                                    img_url={pot} />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;