import styled, { css } from 'styled-components/native';

interface BoxProps {
  hAlign?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  vAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const VSeparator = styled.View`
  ${({ theme }) => css`
    height: ${theme.spacing.gutter}px;
  `}
`;

interface VboxProps extends BoxProps {
  bgColor?: string;
  vGrow?: boolean;
}

interface HBoxProps extends BoxProps {
  vGrow?: boolean;
}

export const VBox = styled.View<VboxProps>`
  ${({ theme, bgColor, vGrow }) => css`
    ${vGrow && `flex-grow: 1`};
    padding-left: ${theme.spacing.gutter}px;
    padding-right: ${theme.spacing.gutter}px;
    background-color: ${bgColor ? theme.color[bgColor] : theme.color.transparent};
  `}
`;

export const HBox = styled.View<HBoxProps>`
  ${({ vAlign, hAlign, vGrow }) => css`
    flex-direction: row;
    justify-content: ${vAlign || 'flex-start'};
    align-items: ${hAlign || 'stretch'};
    ${vGrow && 'flex-grow: 1;'}
  `}
`;
