import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


export default function configureStore(initialState={}) {
  const middleware = [];

  //const reducers = combineReducers({routing: () => {}});

  const store = createStore(() => {}, {}, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}