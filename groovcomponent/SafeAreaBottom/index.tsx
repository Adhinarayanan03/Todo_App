import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WHITE_COLOR } from '../colors';
import { SAFE_AREA_BOTTOM_EDGES } from '../constants';

import { SafeAreaBottomProps } from './types';

export const SafeAreaBottom = React.memo(({
  children,
  backgroundColor = WHITE_COLOR,
}: SafeAreaBottomProps) => (
  <SafeAreaView testID={'safeAreaBottom'} edges={SAFE_AREA_BOTTOM_EDGES} style={[styles.container, { backgroundColor }]}>
    {children}
  </SafeAreaView>
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

