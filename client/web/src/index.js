import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import './index.css';
import { Provider } from 'react-redux'
import { store } from "./state/index"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
