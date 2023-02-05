import styled from 'styled-components/native';

interface ButtonProps {
  full?: boolean;
}

interface LabelProps {
  disabled?: boolean;
}

const Button = styled.TouchableOpacity`
  width: ${({full}: ButtonProps) => (full ? '100%' : '200px')};
  height: 50px;
  background-color: ${props =>
    props.disabled ? props.theme.disabled : props.theme.secondary};
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
`;

export const Basic = styled(Button)``;

export const Outline = styled(Button)`
  background-color: transparent;
  border-width: 1px;
  border-color: ${props =>
    props.disabled ? props.theme.disabled : props.theme.secondary};
`;

export const Link = styled(Button)`
  background-color: transparent;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const LabelBasic = styled(Label)`
  color: ${({theme}) => theme.textSecondary};
`;

export const LabelOutline = styled(Label)<LabelProps>`
  color: ${props =>
    props.disabled ? props.theme.disabled : props.theme.textPrimary};
`;

export const LabelLink = styled(Label)<LabelProps>`
  color: ${props =>
    props.disabled ? props.theme.disabled : props.theme.textPrimary};
`;

const Loading = styled.ActivityIndicator.attrs(({theme}: any) => ({
  size: 'small',
  color: theme.secondary,
}))`
  margin-right: 8px;
`;

export const LoadingBasic = styled(Loading).attrs(({theme}) => ({
  color: theme.primary,
}))``;

export const LoadingOutline = styled(Loading)``;

export const LoadingLink = styled(Loading)``;
