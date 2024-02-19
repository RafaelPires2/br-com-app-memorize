import { css } from 'styled-components/native';

export const ShadowCss = {
  small: css`
    shadow-color: rgb(51, 51, 51);
    shadow-offset: 1px 1px;
    shadow-opacity: 0.3;
    shadow-radius: 2px;
    elevation: 2;
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  medium: css`
    shadow-color: rgb(51, 51, 51);
    shadow-offset: 0px 4px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    elevation: 4;
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  large: css`
    shadow-color: rgb(0, 0, 0);
    shadow-offset: 4px 8px;
    shadow-opacity: 0.5;
    shadow-radius: 8px;
    elevation: 50;
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
};
