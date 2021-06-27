import {put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {LoginParams} from '../entities';
import log from '../../utils/log';

import {Actions} from '../redux';

export default function* login({payload}: PayloadAction<LoginParams>) {
  log(payload);
  yield put(Actions.login.success());
}
