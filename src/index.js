import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WorldClock from './world_clock.js';
import './index.css';
import clockApp from "./redusers";

let store = createStore(clockApp);

ReactDOM.render(
    <Provider store={store}>
        <WorldClock />
    </Provider>,
    document.getElementById('root')
);
