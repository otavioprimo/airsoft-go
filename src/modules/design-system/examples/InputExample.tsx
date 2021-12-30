import React from 'react';
import Input from '../components/Input';
import Container from '../components/Container';
import styled from 'styled-components/native';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

const Center = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

const InputExample: React.FC = () => {
  return (
    <Container>
      <Center>
        <Input label="Nome" />
        <Input leftIcon={faEnvelope} label="Email" />
        <Input leftIcon={faLock} label="Senha" />
      </Center>
    </Container>
  );
};

export default InputExample;
