
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();