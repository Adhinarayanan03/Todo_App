import React from 'react';
import { Text, StyleSheet } from 'react-native';

const P2 = ({ children,...restProps }) => {
  return (
    <Text style={styles.customP2}{...restProps}
    >{children}</Text>
  );
};

const styles = StyleSheet.create({
  customP2: {
    fontSize: 16,
  },
});

export default P2;
