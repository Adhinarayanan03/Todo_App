import { ImageResizeMode, ImageSourcePropType } from 'react-native';

export type ImageProps = {
  source: ImageSourcePropType | number;
  aspectRatio?: number;
  width?: number | string;
  resizeMode?: ImageResizeMode
}
