import React from 'react';
import View from '../atoms/View';

const RectangleBox = ({ children ,...restProps}) => {
  return (
    <View 
      style={{
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: '#00000040', 
        padding: 15,
        backgroundColor:'lightgrey',
       marginTop:15,
       marginLeft:15,
       marginRight:15,
      }}
    flexrow
      {...restProps}
    >
      {children}
    </View>
  );
};

export default RectangleBox;
