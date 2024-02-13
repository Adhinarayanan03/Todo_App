import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress,disabled, style ,...restProps}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      {...restProps}    >
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
    borderRadius:20,
  },
  buttonText: {
     color: '#FFFFFF', 
    fontSize: 20,
    fontFamily: 'Jost',
  },
  buttonDisabled: {
    backgroundColor: "lightgrey"
  }
});

export default CustomButton;
