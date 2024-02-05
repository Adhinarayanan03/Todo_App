import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { MEDIUM_FONT, REGULAR_FONT } from '../fonts';
import { PargraphTextComponentProps } from '../P1/types';

export const Label = ({
  bold,
  center,
  children,
  uppercase,
  capitalize,
  textStyles,
  numberOfLines,
  color = '#555555',
}: PargraphTextComponentProps) => (
  <Text
    numberOfLines={numberOfLines}
    style={[
      styles.text,
      !!color && { color },
      center && styles.center,
      bold && styles.boldText,
      uppercase && styles.transformUppercase,
      capitalize && styles.transformCapitalize,
      textStyles,
    ]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: REGULAR_FONT,
  },
  transformUppercase: {
    textTransform: 'uppercase',
  },
  transformCapitalize: {
    textTransform: 'capitalize',
  },
  boldText: {
    fontFamily: MEDIUM_FONT,
  },
});