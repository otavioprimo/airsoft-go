import {combineReducers} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';

// @ts-ignore
import {PersistPartial} from 'redux-persist/es/persistReducer';

import loginRedux from './auth';

export interface AplicationState extends PersistPartial {
  auth: any;
}

export const rootReducers = combineReducers({
  auth: loginRedux.reducers,
});

export type ApplicationState = ReturnType<typeof rootReducers>;

export const rootSagas = function* rootSagas(): unknown {
  return yield all([yield loginRedux.sagas()]);
};
