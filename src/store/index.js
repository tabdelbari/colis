import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(...middlewares)
)(createStore);

const store = createStoreWithMiddleware(rootReducer, {});

sagaMiddleware.run(rootSaga);
export default store;
