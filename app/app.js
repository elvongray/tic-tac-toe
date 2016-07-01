import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import GameContainer from './containers/GameContainer';

import './styles/base.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('app')
);
