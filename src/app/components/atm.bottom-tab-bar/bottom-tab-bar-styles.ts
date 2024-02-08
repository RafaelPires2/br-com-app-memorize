import styled, { css } from 'styled-components/native';

const BOTTOM_TAB_HEIGHT = '80px';

export const BottomTabBarWrapper = styled.View`
  ${({ theme }) => css`
    width: '100%';
    height: ${BOTTOM_TAB_HEIGHT};
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${theme.color.white};
    padding-left: ${theme.spacing.doubleGutter}px;
    padding-right: ${theme.spacing.doubleGutter}px;
    padding-bottom: ${theme.spacing.gutter}px;
  `}
`;

export const TabBarButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TabBarText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.grayMedium};
  `}
`;
