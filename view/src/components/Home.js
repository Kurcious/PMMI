import React, { Component } from 'react';
import Atracao from './Home/Atracao';
import hong_kong from './images/hong_kong.jpg'
import italy from './images/italy.jpg'
import japan from './images/japan.jpg'
import las_vegas from './images/las_vegas.jpg'
import dino from './images/dino.jpg'
import pot from './images/pot.jpg'
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {

    teste () {
        return <Redirect to="italy"/>
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
                            <h4 className="c-title">Principais Atrações</h4>

                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ cursor: "pointer" }}>

                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </ol>

                                <div className="carousel-inner" onClick={this.teste}>
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={hong_kong} alt="Primeiro Slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Hong Kong</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                            jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau
                                            se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus</p>
                                        </div>
                                    </div>


                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={italy} alt="Segundo Slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Itália</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                            jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau
                                            se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus</p>
                                        </div>
                                    </div>


                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={japan} alt="Terceiro Slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Japão</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                            jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau
                                            se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus</p>
                                        </div>
                                    </div>


                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={las_vegas} alt="Terceiro Slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Las Vegas</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                            jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau
                                            se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus</p>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Anterior</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Próximo</span>
                                </a>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-4">
                            <h4 className="c-title">Outras Atrações</h4>
                            <Link to="#!">
                                <Atracao nome="[Nome da Atração]"
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