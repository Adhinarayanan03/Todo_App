import React from 'react';
import {View as RNView} from 'react-native';
import {
  FLEX_ROW, 
  ALIGN_CENTER, 
  JUSTIFY_CENTER
} from '../theme/style';

const CustomView = React.memo(
  ({
    flexRow,
    flex,
    width,
    height,
    verticalCenter,
    horizontalCenter,
    paddingVertical,
    paddingHorizontal,
    spaceBetween,
    backgroundColor,
    style,
    ...rest
  }) => {
    const containerStyles = [
      flexRow && {
        ...FLEX_ROW,
        ...(verticalCenter && ALIGN_CENTER),
        ...(horizontalCenter && JUSTIFY_CENTER),
      },
      flex && {flex},
      backgroundColor && {backgroundColor},
      paddingVertical && {paddingVertical},
      paddingHorizontal && {paddingHorizontal},
      height && {height},
      width && {width},
      style,
    ];

    return <RNView style={containerStyles} {...rest}></RNView>;
  },
);

export default CustomView;
