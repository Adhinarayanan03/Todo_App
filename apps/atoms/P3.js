import React from 'react';
import { Text, StyleSheet } from 'react-native';

const P3 = ({ children,color,...restProps }) => {
  return (
    <Text style={[styles.customP3, { color }]} {...restProps}>
    {children}</Text>
  );
};

const styles = StyleSheet.create({
  customP3: {
    fontSize: 14,
  },
});

export default P3;
