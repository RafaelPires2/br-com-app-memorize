import * as React from 'react';

import { ImageResizeMode, ImageSourcePropType } from 'react-native';

import { ThemeColors } from '@atomic/obj.theme';
import { ImageIconSize, ImageIconStyled } from './icon-image-styles';

export interface ImageIconProps {
  source: ImageSourcePropType;
  variant?: ThemeColors;
  size?: ImageIconSize;
  testID?: string;
  rounded?: boolean;
  resizeMode?: ImageResizeMode;
}

/** Used for icon sized images. Use variant to tint icon */
export const ImageIcon: React.FC<ImageIconProps> = props => (
  <ImageIconStyled
    source={props.source}
    variant={props.variant}
    size={props.size}
    rounded={props.rounded}
    resizeMode={props.resizeMode}
  />
);

ImageIcon.defaultProps = { size: 'medium', resizeMode: 'contain' };
