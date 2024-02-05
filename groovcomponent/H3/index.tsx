import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { MEDIUM_FONT } from '../fonts';
import { HeaderTextProps } from '../H1/types';

export const H3 = ({
  color,
  center,
  children,
  uppercase,
  textStyles,
}: HeaderTextProps) => (
  <Text style={[
    styles.h3,
    center && styles.center,
    { color: color },
    uppercase && styles.transformUppercase,
    textStyles,
  ]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  h3: {
    fontSize: 18,
    fontFamily: MEDIUM_FONT,
  },
  transformUppercase: {
    textTransform: 'uppercase'
  }
})
