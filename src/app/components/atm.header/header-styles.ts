import styled, { css } from 'styled-components/native';

export const HeaderStyles = styled.View`
  ${({ theme }) => css`
    width: '100%';
    background-color: ${theme.color.primaryDark};
  `}
`;
