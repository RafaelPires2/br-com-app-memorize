import styled, { css } from 'styled-components/native';

export const CloseButtonStyles = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    width: ${theme.button.height}px;
    height: ${theme.button.height}px;
  `}
`;
