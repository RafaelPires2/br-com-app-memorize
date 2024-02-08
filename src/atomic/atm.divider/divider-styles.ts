import styled, { css } from 'styled-components/native';

export const Divider = styled.View`
  ${({ theme }) => css`
    width: '100%';
    height: ${theme.border.width};
    background-color: ${theme.color.gray};
  `}
`;
