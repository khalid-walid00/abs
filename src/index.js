import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Router';
import { BrowserRouter as RouterDom } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './tools/redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterDom>
    <Provider store={store}>
  <App />
    </Provider>
  </RouterDom>
);
