import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import {Provider} from "react-redux";
import store from './redux/redux-store';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App /> 
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

