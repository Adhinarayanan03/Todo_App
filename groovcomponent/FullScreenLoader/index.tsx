import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { View } from '../View';
import { GRAY_XX_LIGHT_COLOR, PRIMARY_COLOR } from '../colors';

export type FullScreenLoaderProps = {
  show: boolean;
};

export const FullScreenLoader = React.memo(({ show }: FullScreenLoaderProps) => show ? (
  <View testID='fullScreenLoaderContainer' style={[styles.container, StyleSheet.absoluteFill]}>
    <ActivityIndicator testID='activityIndicator' size={'large'} color={PRIMARY_COLOR} />
  </View>
) : null);

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    justifyContent: 'center',
    backgroundColor: GRAY_XX_LIGHT_COLOR + '66',  // + '66' = 40% opacity in HEX code
  },
});
