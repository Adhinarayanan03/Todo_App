import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H3 = ({ children,...restProps  }) => {
  return (
    <Text style={styles.customH3}{...restProps}
    >{children}</Text>
  );
};

const styles = StyleSheet.create({
  customH3: {
    fontSize: 22,
  },
});

export default H3;
