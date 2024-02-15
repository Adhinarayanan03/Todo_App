import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H1 = ({ children,color,...restProps }) => {
  return (
    <Text style={[styles.customH1, { color }]} {...restProps}>
      {children}</Text>
  );
};

const styles = StyleSheet.create({
  customH1: {
    fontSize: 32,
  },
});

export default H1;
