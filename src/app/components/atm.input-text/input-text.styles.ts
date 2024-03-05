import styled, { css } from 'styled-components/native';

const HEIGHT_BOX_TEXT = '110px';

export const InputTextStyle = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.button.height}px;
    background-color: ${theme.color.grayXLight};
    padding: ${theme.spacing.gutter}px;
    border: ${theme.border.width} solid ${theme.color.gray};
    border-radius: ${theme.border.radiusSmall};
    color: ${theme.color.grayXDark};
  `}
`;

export const BoxInputTextStyle = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: ${HEIGHT_BOX_TEXT};
    background-color: ${theme.color.grayXLight};
    padding: ${theme.spacing.gutter}px;
    border: ${theme.border.width} solid ${theme.color.gray};
    border-radius: ${theme.border.radiusSmall};
    color: ${theme.color.grayXDark};
  `}
`;
