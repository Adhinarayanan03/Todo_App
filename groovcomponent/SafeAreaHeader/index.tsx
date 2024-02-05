import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WHITE_COLOR } from '../colors';
import { SAFE_AREA_HEADER_EDGES } from '../constants';

import { SafeAreaHeaderProps } from './types';

export const SafeAreaHeader = React.memo(({
  children,
  backgroundColor = WHITE_COLOR,
}: SafeAreaHeaderProps) => (
  <SafeAreaView testID={'safeAreaHeader'} edges={SAFE_AREA_HEADER_EDGES} style={[styles.container, { backgroundColor }]}>
    {children}
  </SafeAreaView>
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

