import React from 'react';
import { Text, StyleSheet } from 'react-native';

const P1 = ({ children,...restProps }) => {
  return (
    <Text style={styles.customP1}{...restProps}
    >{children}</Text>
  );
};

const styles = StyleSheet.create({
  customP1: {
    fontSize: 18,
  },
});

export default P1;
