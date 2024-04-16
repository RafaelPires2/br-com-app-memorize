import styled, { css } from 'styled-components/native';

const BOTTOM_HEIGHT = '-50px';

interface ButtonDetailStylesProps {
  color: string;
}

export const ButtonDetailStyles = styled.TouchableOpacity<ButtonDetailStylesProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.color[color]};
    height: ${theme.button.height}px;
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonsDetailNextWrapper = styled.View`
  width: 100%;
  height: 0;
  position: absolute;
  bottom: ${BOTTOM_HEIGHT};
`;

export const ButtonDetailWrapper = styled.View`
  width: 100%;
`;
