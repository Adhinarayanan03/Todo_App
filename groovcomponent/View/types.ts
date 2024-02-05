import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type ContainerProps = {
  flex?: number;
  row?: boolean;
  width?: number;
  height?: number;
  hCenter?: boolean;
  vCenter?: boolean;
  hPadding?: number;
  vPadding?: number;
  borderRadius?: number;
  borderColor?: string;
  spaceBetween?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
