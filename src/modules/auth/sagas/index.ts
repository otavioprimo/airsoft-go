import {all, takeLatest} from 'redux-saga/effects';

import login from './login';

import {Actions} from '../redux';

export default function* root() {
  yield all([yield takeLatest(Actions.login.execute, login)]);
}
