import React from 'react';
import {  StyleSheet, TextInput } from 'react-native';

const TextComponent = ({ title,value,onChangeText}) => {
  return (
    <TextInput
      style={styles.title}
      placeholder={title}
      placeholderTextColor="#8B8787"
      value={value}
      onChangeText={onChangeText}
    />
  );
};



const styles = StyleSheet.create({
  title: {
    fontFamily:'Jost',
    fontSize: 16,
    color: '#8B8787',
    borderBottomWidth: 1,
    borderColor: "#8B8787",
    marginBottom:20
  },
});

export default TextComponent;
