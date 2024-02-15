import React from 'react';
import { TextInput } from 'react-native';
import { MEDIUM } from '../theme/style';
import { GREY_COLOR, LIGHT_GREY } from '../theme/colors';

const TextComponent = ({ title,value,fontSize,onChangeText}) => {
  return (
    <TextInput
      style={fontSize && {fontSize}}
      value={value}
      color={GREY_COLOR}
      placeholder={title}
      marginBottom={MEDIUM}
      borderBottomWidth={1}
      borderColor={LIGHT_GREY}
      onChangeText={onChangeText}
      placeholderTextColor={GREY_COLOR}
    />
  );
};

export default TextComponent;
