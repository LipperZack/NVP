import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import Stage from './components/Stage';
import './index.css';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Stage />
  </Provider>,
  document.getElementById('root')
);
