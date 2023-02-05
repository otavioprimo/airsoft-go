import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import styled from 'styled-components/native';

const Center = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

const ButtonExample: React.FC = () => {
  return (
    <Container>
      <Center>
        <Button label="Entrar" />
        <Button label="Entrar" variant="outline" />
        <Button label="Entrar" variant="link" />

        <Button label="Entrar" loading />
        <Button label="Entrar" loading variant="outline" />
        <Button label="Entrar" loading variant="link" />

        <Button label="Entrar" disabled />
        <Button label="Entrar" disabled variant="outline" />
        <Button label="Entrar" disabled variant="link" />

        <Button label="Entrar" full />
        <Button label="Entrar" full variant="outline" />
        <Button label="Entrar" full variant="link" />
      </Center>
    </Container>
  );
};

export default ButtonExample;
