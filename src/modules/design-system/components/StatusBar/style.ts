import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  background-color: ${({theme}) => theme.primary};
  height: ${getStatusBarHeight()}px;
`;
