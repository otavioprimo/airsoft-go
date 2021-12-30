import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const Container = styled.TouchableOpacity`
  height: 250px;
  background-color: ${({theme}) => theme.primary};
  flex: 0.5;
  margin: 8px;
  border-radius: 16px;
  border-color: ${({theme}) => theme.secondary};
  border-width: 0.6px;
`;

export const BackgroundImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 16px;
`;

export const ContainerTop = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 16px;
`;

export const ContainerFooter = styled.View`
  background-color: #ccc;
  flex: 0.3;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 4px;
`;

export const ContainerInfos = styled.View`
  background-color: rgba(0, 0, 0, 0.65);
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 800;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 6px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 6,
  ellipsizeMode: 'tail',
})`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;
`;

export const ContainerFooterInfos = styled.View`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-top: 2px;
  font-size: 16px;
  font-weight: 500;
`;

export const FooterSubTitle = styled.Text`
  color: ${({theme}) => theme.blue};
`;

export const Icon = styled(FontAwesomeIcon).attrs(({theme}) => ({
  size: 19,
  color: theme.blue,
}))`
  margin-left: 4px;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
`;
