declare module 'redux-persist-seamless-immutable';

import {ThemeType} from './src/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
