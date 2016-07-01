import { createStore, applyMiddleware, compose } from 'redux';

import gameState from '../reducer/game_state';


export default function configureStore(initialState={}) {
  const middleware = [];

  const store = createStore(gameState, {}, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}