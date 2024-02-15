import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H3 = ({ children,color,...restProps  }) => {
  return (
    <Text style={[styles.customH3, { color }]} {...restProps}>
    {children}</Text>
  );
};

const styles = StyleSheet.create({
  customH3: {
    fontSize: 22,
  },
});

export default H3;
