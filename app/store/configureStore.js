import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import gameState from '../reducer/game_state';


export default function configureStore(initialState={}) {
  const middleware = [thunkMiddleware];

  const store = createStore(gameState, {}, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}