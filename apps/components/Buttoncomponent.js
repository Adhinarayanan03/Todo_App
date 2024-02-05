import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9395D3', 
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontFamily: 'Jost',
  },
});

export default CustomButton;
