import styled, { css } from 'styled-components/native';

export const VSeparator = styled.View`
  ${({ theme }) => css`
    height: ${theme.spacing.gutter}px;
  `}
`;

export const VBox = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-left: ${theme.spacing.gutter}px;
    padding-right: ${theme.spacing.gutter}px;
    background-color: ${theme.color.grayLight};
  `}
`;
