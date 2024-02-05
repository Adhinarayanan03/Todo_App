import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SafeAreaFullProps } from './types';

export const SafeAreaFull = React.memo(({
  children,
  backgroundColor,
}: SafeAreaFullProps) => (
  <SafeAreaView testID={'safeAreaFull'} style={[styles.container, { backgroundColor }]}>
    {children}
  </SafeAreaView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
