import React from 'react';
import {TouchableOpacity} from 'react-native';
import P1 from '../atoms/P1';
import {
  LIGHT_GREY, 
  WHITE_COLOR,
  PRIMARY_COLOR, 
} from '../theme/colors';
import {
  ALIGN_CENTER, 
  JUSTIFY_CENTER
} from '../theme/style';

const CustomButton = ({title, onPress, disabled, style, ...restProps}) => {
  return (
    <TouchableOpacity
      style={[
        {borderRadius: 20, paddingVertical: 20, backgroundColor: PRIMARY_COLOR},
        disabled && {backgroundColor: LIGHT_GREY},
        ALIGN_CENTER,
        JUSTIFY_CENTER,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...restProps}>
      <P1 color={WHITE_COLOR}>{title}</P1>
    </TouchableOpacity>
  );
};

export default CustomButton;
