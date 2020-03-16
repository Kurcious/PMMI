import React, { Component } from 'react';
import Layout from './Layout';
import Footer from './Footer';
import Dropdown from './Sala/Dropdown';
import HeaderSala from './Sala/HeaderSala';
import hong_kong from './images/hong_kong.jpg'

class Sala extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Layout />
                <div className="container c-min-90">

                    <HeaderSala nome="[Nome da Sala]" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris nibh, ultricies eget orci sed, viverra gravida est.
                    Nullam in quam tincidunt, lacinia nunc sed, ultricies tortor. Proin dapibus nisl id odio fringilla, vitae tincidunt mauris feugiat.
                    Suspendisse nec diam rutrum, egestas erat ut, placerat felis. Donec iaculis volutpat nunc. Nullam convallis, mauris vel lacinia commodo,
                    libero orci convallis neque, sit amet elementum est justo vel felis. Aliquam erat volutpat." />
                    <nav id="navbarSala" className="navbar navbar-expand-lg c-background-purple">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#roomsNav" aria-controls="roomsNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-bars fa-2x text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="roomsNav">
                            <ul className="navbar-nav mr-auto nav-fill w-100">
                                <Dropdown dropdownId="dropdownGaleria" dropdownNome="Galeria" opcoes={[
                                    { a: "Título 1", href: "#titulo1" },
                                    { a: "Título 2", href: "#titulo2" },
                                    { a: "Título 3", href: "#titulo3" }
                                    ]} />
                                <Dropdown dropdownId="dropdownDocs" dropdownNome="Documentos Online" opcoes={[{ a: "Link 1", href: "#!" }, { a: "Link 2", href: "#!" }]} />
                                <Dropdown dropdownId="dropdownHorarios" dropdownNome="Horários" opcoes={[{ a: "Link 1", href: "#!" }, { a: "Link 2", href: "#!" }]} />
                                <Dropdown dropdownId="dropdownResponsavel" dropdownNome="Responsável" opcoes={[{ a: "Link 1", href: "#!" }, { a: "Link 2", href: "#!" }]} />
                            </ul>
                        </div>
                    </nav>
                    <div className="row mt-4 mb-2">
                        <div className="col col-12 col-md-6 col-lg-5 col-xl-4 mb-1">
                            <img class="img-fluid c-sala-img" src={hong_kong} alt="Imagem de exemplo genérica"/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
                            <h4 className="c-title" id="titulo1">Título 1</h4>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, eros eu bibendum consectetur, magna ipsum placerat nulla, ac luctus tortor eros eu sapien. Pellentesque ullamcorper odio ligula, eu eleifend sapien cursus quis. Sed et maximus tortor, vel ornare elit. Aenean non nibh tortor. Mauris lacinia vitae lorem vitae sollicitudin. Aliquam efficitur erat id mi commodo porta. Morbi tristique sollicitudin lacus vel rhoncus. Ut viverra pharetra justo sed mattis.

                        Cras elementum lorem eget metus facilisis, quis vehicula est commodo. Donec finibus ullamcorper ultricies. Duis ipsum est, cursus ac tincidunt eget, pellentesque vehicula ipsum. Fusce pulvinar nulla magna, eget commodo sapien facilisis eget. Fusce velit augue, faucibus eget lorem ut, tempus bibendum justo. Vivamus euismod augue et est commodo varius. Maecenas volutpat urna maximus, hendrerit leo tincidunt, mattis diam. Etiam quis ante tellus. Vestibulum ultricies dignissim enim sed hendrerit. Sed tincidunt lorem scelerisque mattis tincidunt. Aliquam nunc sapien, vehicula quis scelerisque sed, sollicitudin sed risus. Phasellus id ornare ipsum. In orci dui, facilisis vitae elementum vitae, vehicula et felis. Nunc sagittis erat id ipsum congue tempus. In sit amet vehicula arcu.       
                        </p>
                    </div>
                    <div className="row mt-4 mb-2">
                        <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
                            <h4 className="c-title" id="titulo2">Título 2</h4>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-5 col-xl-4 mb-1">
                            <img class="img-fluid c-sala-img" src={hong_kong} alt="Imagem de exemplo genérica"/>
                        </div>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, eros eu bibendum consectetur, magna ipsum placerat nulla, ac luctus tortor eros eu sapien. Pellentesque ullamcorper odio ligula, eu eleifend sapien cursus quis. Sed et maximus tortor, vel ornare elit. Aenean non nibh tortor. Mauris lacinia vitae lorem vitae sollicitudin. Aliquam efficitur erat id mi commodo porta. Morbi tristique sollicitudin lacus vel rhoncus. Ut viverra pharetra justo sed mattis.

                        Cras elementum lorem eget metus facilisis, quis vehicula est commodo. Donec finibus ullamcorper ultricies. Duis ipsum est, cursus ac tincidunt eget, pellentesque vehicula ipsum. Fusce pulvinar nulla magna, eget commodo sapien facilisis eget. Fusce velit augue, faucibus eget lorem ut, tempus bibendum justo. Vivamus euismod augue et est commodo varius. Maecenas volutpat urna maximus, hendrerit leo tincidunt, mattis diam. Etiam quis ante tellus. Vestibulum ultricies dignissim enim sed hendrerit. Sed tincidunt lorem scelerisque mattis tincidunt. Aliquam nunc sapien, vehicula quis scelerisque sed, sollicitudin sed risus. Phasellus id ornare ipsum. In orci dui, facilisis vitae elementum vitae, vehicula et felis. Nunc sagittis erat id ipsum congue tempus. In sit amet vehicula arcu.       
                        </p>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, eros eu bibendum consectetur, magna ipsum placerat nulla, ac luctus tortor eros eu sapien. Pellentesque ullamcorper odio ligula, eu eleifend sapien cursus quis. Sed et maximus tortor, vel ornare elit. Aenean non nibh tortor. Mauris lacinia vitae lorem vitae sollicitudin. Aliquam efficitur erat id mi commodo porta. Morbi tristique sollicitudin lacus vel rhoncus. Ut viverra pharetra justo sed mattis.

                        Cras elementum lorem eget metus facilisis, quis vehicula est commodo. Donec finibus ullamcorper ultricies. Duis ipsum est, cursus ac tincidunt eget, pellentesque vehicula ipsum. Fusce pulvinar nulla magna, eget commodo sapien facilisis eget. Fusce velit augue, faucibus eget lorem ut, tempus bibendum justo. Vivamus euismod augue et est commodo varius. Maecenas volutpat urna maximus, hendrerit leo tincidunt, mattis diam. Etiam quis ante tellus. Vestibulum ultricies dignissim enim sed hendrerit. Sed tincidunt lorem scelerisque mattis tincidunt. Aliquam nunc sapien, vehicula quis scelerisque sed, sollicitudin sed risus. Phasellus id ornare ipsum. In orci dui, facilisis vitae elementum vitae, vehicula et felis. Nunc sagittis erat id ipsum congue tempus. In sit amet vehicula arcu.       
                        </p>
                    </div>
                    <div className="row mt-4 mb-2">
                        <div className="col col-12 col-md-6 col-lg-5 col-xl-4 mb-1">
                            <img class="img-fluid c-sala-img" src={hong_kong} alt="Imagem de exemplo genérica"/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
                            <h4 className="c-title" id="titulo3">Título 3</h4>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </div>

                    {/* <div class="media mt-4">
                        <img class="mr-3 img-fluid c-sala-img" src={hong_kong} alt="Imagem de exemplo genérica"/>
                        <div class="media-body">
                            <h5 class="mt-0 c-title">Título 1</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sala;