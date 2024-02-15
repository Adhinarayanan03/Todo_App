import React from 'react';
import {View} from 'react-native';
import H1 from '../atoms/H1';
import {
  FLEX_ROW, 
  ALIGN_CENTER, 
  JUSTIFY_CENTER
} from '../theme/style';
import {WHITE_COLOR} from '../theme/colors';


const Header = ({title, backgroundColor, height, ...restProps}) => {
  return (
    <View
      style={[
        FLEX_ROW,
        ALIGN_CENTER,
        JUSTIFY_CENTER,
        {backgroundColor, height},
      ]}
      {...restProps}>
      <H1 color={WHITE_COLOR}>{title}</H1>
    </View>
  );
};

export default Header;
