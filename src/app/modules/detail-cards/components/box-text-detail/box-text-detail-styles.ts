import { ShadowCss } from '@atomic/atm.shadow';
import styled from 'styled-components/native';

const BOX_TEXT_HEIGHT = '250px';

export const BoxTextDetailStyles = styled.View`
  width: 100%;
  height: ${BOX_TEXT_HEIGHT};
  background-color: ${props => props.theme.color.white};
  padding: ${props => props.theme.spacing.medium}px;
  ${ShadowCss.medium}
`;
