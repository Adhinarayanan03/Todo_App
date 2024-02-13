import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';

const View = React.memo(
  // React.memo => preventing unnecessary renders if the props do not change.
  ({
    flexrow,
    flex,
    width,
    height,
    hCenter,
    vCenter,
    hPadding,
    vPadding,
    borderColor,
    spaceBetween,
    backgroundColor,
    style,
    ...rest
  }) => (
    // RNView => without conflicting with any other View components you may import from other 
    <RNView
      style={[
        flexrow
          ? {
              ...styles.row,
              ...(vCenter && styles.alignCenter),
              ...(hCenter && styles.justifyCenter),
            }
          : {
              ...(hCenter && styles.alignCenter),
              ...(vCenter && styles.justifyCenter),
            },
        spaceBetween && styles.spaceBetween,
        flex && {flex},
        borderColor && {borderColor},
        backgroundColor && {backgroundColor},
        vPadding && {paddingVertical: vPadding},
        hPadding && {paddingHorizontal: hPadding},
        height && { height},
        width && {width},
        style,
      ]}
      {...rest}></RNView>
  ),
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default View;

