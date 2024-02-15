import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H2 = ({ children,color,...restProps }) => {
  return (
    <Text style={[styles.customH2, { color }]} {...restProps}>
      {children}</Text>
  );
};

const styles = StyleSheet.create({
  customH2: {
    fontSize: 26,
  },

});

export default H2;
