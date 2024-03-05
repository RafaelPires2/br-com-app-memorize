import styled, { css } from 'styled-components/native';

export const CheckBoxCircleStyle = styled.View`
  ${({ theme }) => css`
    width: ${theme.iconSize.large}px;
    height: ${theme.iconSize.large}px;
    border: ${theme.border.width} solid ${theme.color.secondaryXDark};
    border-radius: ${theme.border.radiusMedium};
    justify-content: center;
    align-items: center;
  `}
`;
