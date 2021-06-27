// @ts-nocheck
import {createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reactotronSaga from 'reactotron-react-native';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';

import {rootReducers, rootSagas} from '../../index';

import Reactotron from './reactotron';

const transformerConfigRoot = {
  whitelistPerReducer: {},
  blacklistPerReducer: {},
};

const persistConfig = {
  key: 'store', // Chave que será salva no AsyncStorage
  storage: AsyncStorage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfigRoot)],
  whitelist: ['session'], // Deve ser passado qual o reducer deve ser salvo
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotronSaga.createSagaMonitor(),
});

const middlewares: any = [];
middlewares.push(sagaMiddleware);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const Store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSagas);

const persistor = persistStore(Store);

export {Store, persistor};
