import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.textPrimary};
`;

export const ButtonLogin = styled.Button``;
