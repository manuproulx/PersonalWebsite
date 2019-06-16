import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = () => {
    const middlewares = [
        thunk
    ];

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(
        rootReducer,
        enhancer
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;