// CustomRectangleBox.js

import React from 'react';
import { DARK_COLOR } from '../groovcomponent/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View } from '../groovcomponent';
import { MEDIUM_PADDING_SIZE, SMALL_PADDING_SIZE } from '../groovcomponent/layout';

const RectangleBox = ({ children }) => {
  return (
    <View hPadding={MEDIUM_PADDING_SIZE} vPadding={SMALL_PADDING_SIZE}
      style={{
        width: 350, 
        height: 65, 
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: '#00000040', 
      }}
    >
      {children}
    </View>
  );
};

export default RectangleBox;
