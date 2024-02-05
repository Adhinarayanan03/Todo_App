import React from 'react';
import { StyleSheet, Image, DimensionValue } from 'react-native';

import { View } from '../View';
import { ImageProps } from './types';

export const Img = React.memo(({
  source,
  width = '100%',
  resizeMode = 'contain',
  aspectRatio = 1,
}: ImageProps) => (
  <View testID={'imgContainer'} style={{ width: width as DimensionValue, aspectRatio }}>
    <Image
      source={source}
      style={styles.image}
      testID={'imgElement'}
      resizeMode={resizeMode}
    />
  </View>
));

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
