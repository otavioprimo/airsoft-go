import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginParams} from '../entities';

interface LoginState {
  loading: boolean;
  error?: any;
  success?: any;
}

const initialState: LoginState = {
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    execute: (state, _: PayloadAction<LoginParams>) => {
      state.loading = true;
    },
    success: state => {
      state.loading = false;
    },
    failure: state => {
      state.loading = false;
    },
  },
});

export default loginSlice;
