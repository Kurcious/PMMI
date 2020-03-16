import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contato from './components/Contato';
import Sala from './components/Sala';
import Reserva from './components/Reserva';
import A from './components/Formularios/A';
import B from './components/Formularios/B';
import C from './components/Formularios/C';
import D from './components/Formularios/D';
import E from './components/Formularios/E';
import F from './components/Formularios/F';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/inicio" exact={true} component={App} />
            <Route path="/contato" exact={true} component={Contato} />
            <Route path="/reserva" exact={true} component={Reserva} />
            <Route path="/salas" exact={true} component={Sala} />
            <Route path="/a" exact={true} component={A} />
            <Route path="/b" exact={true} component={B} />
            <Route path="/c" exact={true} component={C} />
            <Route path="/d" exact={true} component={D} />
            <Route path="/e" exact={true} component={E} />
            <Route path="/f" exact={true} component={F} />
        </Switch>
    </BrowserRouter>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
