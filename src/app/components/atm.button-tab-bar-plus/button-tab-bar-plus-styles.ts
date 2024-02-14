import styled, { css } from 'styled-components/native';

const SIZE_BUTTON_PLUS = '72px';
const MARGIN_BUTTON_PLUS = '30%';

export const ButtonTabBarPlusStyle = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.color.secondary};
    width: ${SIZE_BUTTON_PLUS};
    height: ${SIZE_BUTTON_PLUS};
    border-radius: ${theme.button.height}px;
    align-items: center;
    justify-content: center;
  `}
`;

export const ButtonTabBarPlusWrapperStyle = styled.View`
  position: relative;
  bottom: ${MARGIN_BUTTON_PLUS};
`;
