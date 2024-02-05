import React from 'react';
import { View } from 'react-native';
import { HeightProps } from './types';

import { HALF_REGULAR_PADDING_SIZE } from '../layout';

export const Height = React.memo(({ size = HALF_REGULAR_PADDING_SIZE }: HeightProps) => (
  <View testID={'height'} style={{ height: size }} />
));
