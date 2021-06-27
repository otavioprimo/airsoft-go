import Login from './login';
import {combineReducers} from '@reduxjs/toolkit';

export const Actions = {
  login: Login.actions,
};

const reducers = combineReducers({
  login: Login.reducer,
});

export default reducers;
