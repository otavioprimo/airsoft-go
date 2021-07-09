import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ContainerInput = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
`;

export const InputText = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.secondary,
}))`
  color: ${({theme}) => theme.textPrimary};
  font-size: 16px;
  border-bottom-color: ${({theme}) => theme.secondary};
  border-bottom-width: 1px;
  flex: 1;
`;

export const ContainerIcon = styled.View`
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.secondary};
`;

export const Icon = styled(FontAwesomeIcon).attrs(({theme}) => ({
  size: 19,
  color: theme.textPrimary,
}))``;

export const ContainerText = styled.View`
  height: 38px;
  flex: 1;
`;

export const Label = styled(Animated.Text)`
  color: ${({theme}) => theme.textPrimary};
  position: absolute;
`;
