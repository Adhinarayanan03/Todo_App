import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H2 = ({ children,...restProps }) => {
  return (
    <Text style={styles.customH2} {...restProps}>
      {children}</Text>
  );
};

const styles = StyleSheet.create({
  customH2: {
    fontSize: 26,
// fontFamily:'Jost-Thin'
  },

});

export default H2;
