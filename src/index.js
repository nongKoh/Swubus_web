import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import Main from './Main';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import './App.css';
import './Srinakharinwirot-Regular.ttf'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Main" component={Main} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
