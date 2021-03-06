export interface ThemeType {
  primary: string;
  secondary: string;
  secondaryStrong: string;
  secondaryDisabled: string;
  textPrimary: string;
  textSecondary: string;
  background: string;
  overlay: string;

  danger: string;
  success: string;
  warning: string;

  google: string;
  facebook: string;
  apple: string;
}

import DarkTheme from './dark.theme';
import WhiteTheme from './white.theme';

export {DarkTheme, WhiteTheme};
