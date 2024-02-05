import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';

import { ContainerProps } from './types';

export const View = React.memo(({
  row,
  flex,
  width,
  height,
  hCenter,
  vCenter,
  children,
  hPadding,
  vPadding,
  borderColor,
  spaceBetween,
  borderRadius,
  backgroundColor,
  style,
  ...rest
}: ContainerProps) => (
  <RNView
    style={[
      row
        ? {
          ...styles.row,
          ...vCenter && styles.alignCenter,
          ...hCenter && styles.justifyCenter
        }
        : {
          ...hCenter && styles.alignCenter,
          ...vCenter && styles.justifyCenter
        },
      spaceBetween && styles.spaceBetween,
      !!flex && { flex },
      !!borderColor && { borderColor },
      !!backgroundColor && { backgroundColor },
      !!vPadding && { paddingVertical: vPadding },
      !!hPadding && { paddingHorizontal: hPadding },
      !!borderRadius && { borderRadius },
      !!height && { height },
      !!width && { width },
      style
    ]}
    {...rest}
  >
    {children}
  </RNView>
));

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});
