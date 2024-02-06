import 'styled-components';
import { commonTheme } from './src/atomic/obj.theme/common.theme';

type CommonTheme = typeof commonTheme;

declare module 'styled-components' {
  type Theme = CommonTheme;
  export interface DefaultTheme extends Theme {}
}
