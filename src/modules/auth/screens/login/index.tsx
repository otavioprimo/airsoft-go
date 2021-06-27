import React from 'react';

import {ButtonLogin, Container, Title} from './styles';
import {useDispatch} from 'react-redux';

import {Actions as AuthActions} from '../../redux';
import {LoginType} from '../../entities';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  const doLogin = () => {
    dispatch(
      AuthActions.login.execute({
        email: '1234@gmail.com',
        password: '1234',
        type: LoginType.email,
      }),
    );
  };

  return (
    <Container>
      <Title>LoginScreen</Title>
      <ButtonLogin onPress={doLogin} title="Entrar" />
    </Container>
  );
};

export default LoginScreen;
