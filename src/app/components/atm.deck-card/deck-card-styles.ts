import { ShadowCss } from '@atomic/atm.shadow/shadow-component';
import styled, { css } from 'styled-components/native';

const HEIGHT_CARD = '60px';
const WIDTH_CARD = '100%';

export const DeckCardStyles = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${WIDTH_CARD};
    height: ${HEIGHT_CARD};
    background-color: ${theme.color.grayXXLight};
    border-radius: ${theme.border.radiusXSmall};
    justify-content: center;
    ${ShadowCss.medium}
  `}
`;
