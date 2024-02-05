import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { HeaderTextProps } from '../H1/types';
import { MEDIUM_FONT, REGULAR_FONT } from '../fonts';

export const H2: React.FC<HeaderTextProps> = ({
  bold,
  color,
  center,
  children,
  uppercase,
  textStyles,
}) => (
  <Text
    style={[
      styles.h2,
      center && styles.center,
      { color: color },
      bold && styles.bold,
      uppercase && styles.transformUppercase,
      textStyles,
    ]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  h2: {
    fontSize: 22,
    fontFamily: REGULAR_FONT,
  },
  bold: {
    fontFamily: MEDIUM_FONT,
  },
  transformUppercase: {
    textTransform: 'uppercase',
  },
});
