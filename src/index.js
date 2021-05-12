import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss'
import App from './Layout/App';
import {Provider} from "react-redux";
import {configureStore} from "./Store/configureStore.js";

// const App = <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px'}}>Build In Progress!</div>

const store = configureStore();

function render() {
    ReactDOM.render (<Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>, document.getElementById('root'));
}

if (module.hot) {
    module.hot.accept("./Layout/App", function () {
        setTimeout(render);
    });
}

render()