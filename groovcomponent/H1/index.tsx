import React from 'react';
import { StyleSheet, Text } from 'react-native';


import { MEDIUM_FONT } from '../fonts';
import { HeaderTextProps } from './types';

export const H1: React.FC<HeaderTextProps> = ({
  color,
  center,
  children,
  textStyles,
}) => (
  <Text style={[
    styles.h1,
    center && styles.center,
    { color: color },
    textStyles,
  ]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  h1: {
    fontSize: 32,
    fontFamily: MEDIUM_FONT
  },
})
