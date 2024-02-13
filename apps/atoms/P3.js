import React from 'react';
import { Text, StyleSheet } from 'react-native';

const P3 = ({ children,...restProps }) => {
  return (
    <Text style={styles.customP3}{...restProps}
    >{children}</Text>
  );
};

const styles = StyleSheet.create({
  customP3: {
    fontSize: 14,
  },
});

export default P3;
