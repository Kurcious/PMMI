import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/custom.css'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="c-title">
					<h3 className="c-title-h3">Bem Vindo ao Museu Municipal de Itápolis</h3>
					<hr></hr>
					<span>Descrição do Museu: Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium 
						jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau 
						se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus
					</span>
				</div>
				<div className="c-div-carousel">
					<h4 className="c-subtitle-h4">Principais Atrações</h4>
					<Carousel className="c-carousel">
						<div>
							<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
							<p className="legend">Hong Kong</p>
						</div>
						<div>
							<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
							<p className="legend">Italia</p>
						</div>
						<div>
							<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
							<p className="legend">Japan</p>
						</div>
						<div>
							<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
							<p className="legend">Las Vegas</p>
						</div>
					</Carousel>
				</div>
				<div className="pAtracao">
					<span>Descrição do Museu: Lorem ipsum dolor sit amet, consectetur la capsour itsum op timousium 
						jar pe ritus ifacta pitericit hacquer jac tvon no nart kapour firi um jigsum von cau 
						se it tedoesn ent at bi daret peur it ourus von ti fur batelour chitrius befon netil buforus
					</span><br></br>
					<button className="botao">Agende Sua Visita</button>
				</div>
            </div>
		);
    }
}

export default Home;

/*let styles = {
    margin: 'auto',
    width: '500px'
  };

function App() {
  return (
	<div style={styles}>
		<Carousel>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend"></p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
				<p className="legend">Las Vegas</p>
			</div>
		</Carousel>
	</div>
  );
}

export default App;*/