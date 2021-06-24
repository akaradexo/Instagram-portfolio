import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import folioReducer from './components/Folio/folioReducer';
// import meReducer from './components/Folio/meReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(folioReducer);

ReactDOM.render(
  <Provider store={store}  >
    <App />
    </Provider>,
  document.getElementById('root')
);
