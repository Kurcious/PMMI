import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import hong_kong from '../images/hong_kong.jpg'
import italy from '../images/italy.jpg'
import japan from '../images/japan.jpg'
import las_vegas from '../images/las_vegas.jpg'

class Carrossel extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.descricaoTitulo = React.createRef();
        this.descricaoTexto = React.createRef();

        
    }
    handleSelect = (selectedIndex) => {
        const title = this.descricaoTitulo.current;
        const desc = this.descricaoTexto.current;
        switch (selectedIndex) {
            case 0:
                title.innerHTML = "Hong Kong";
                desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium jar pe ritus ifacta pitericit hacquer.";
                break;
            case 1:
                title.innerHTML = "Japan";
                desc.innerHTML = "Nunc in pulvinar nisi. Nam eros libero, pharetra sit amet facilisis non, facilisis id urna. Sed vitae nibh ornare, lobortis justo aliquet, pellentesque metus.";
                break;
            case 2:
                title.innerHTML = "Italy";
                desc.innerHTML = "Quisque nec ante justo. Aenean commodo augue ut arcu porttitor molestie. Donec nunc tellus, condimentum et nibh sit amet, sodales efficitur augue.";
                break;
            case 3:
                title.innerHTML = "Las Vegas";
                desc.innerHTML = "Cras pulvinar massa purus, et rutrum turpis condimentum eu. Integer rutrum sapien sapien, ac pretium urna dictum in. Donec lacinia eu dui nec interdum.";
                break;
            default:
                title.innerHTML = "Slide 1";
                desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium jar pe ritus ifacta pitericit hacquer.";
        }

    }
    render() {
        return (
            <div>

                <Carousel onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hong_kong}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={japan}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={italy}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={las_vegas}
                            alt="Fourth Slide"
                        />
                    </Carousel.Item>

                </Carousel>
                <div>
                    <h5 className="c-title mt-2" ref={this.descricaoTitulo}>Hong Kong</h5>
                    <p ref={this.descricaoTexto}>Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium
                                                jar pe ritus ifacta pitericit hacquer.</p>
                </div>
            </div>

        );
    }
}

export default Carrossel;