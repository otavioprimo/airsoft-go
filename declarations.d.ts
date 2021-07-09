import 'styled-components';
import {ThemeType} from '~/theme';

declare module 'redux-persist-seamless-immutable';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
