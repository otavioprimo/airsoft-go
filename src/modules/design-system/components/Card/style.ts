import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const Container = styled.TouchableOpacity`
  height: 150px;
  background-color: ${({theme}) => theme.secondary};
  flex: 1;
  margin: 4px 16px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.secondary};
  border-width: 0.6px;
`;
