import React from 'react';
import { View } from 'react-native';

import { WidthProps } from './types';
import { HALF_REGULAR_PADDING_SIZE } from '../layout';

export const Width = React.memo(({ size = HALF_REGULAR_PADDING_SIZE }: WidthProps) => (
  <View testID={'width'} style={{ width: size }} />
));
