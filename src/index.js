import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contato from './components/Contato';
import Salas from './components/Salas';
import Reserva from './components/Reserva';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/inicio" exact={true} component={App} />
            <Route path="/contato" exact={true} component={Contato} />
            <Route path="/salas" exact={true} component={Salas} />
            <Route path="/reserva" exact={true} component={Reserva} />
        </Switch>
    </BrowserRouter>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
