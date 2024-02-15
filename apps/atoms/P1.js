import React from 'react';
import { Text, StyleSheet } from 'react-native';

const P1 = ({ children, color, ...restProps }) => {
  return (
    <Text style={[styles.customP1, { color }]} {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  customP1: {
    fontSize: 18,
  },
});

export default P1;
