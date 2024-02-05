import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type PargraphTextComponentProps = {
  color?: string;
  bold?: boolean;
  center?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  numberOfLines?: number;
  children: React.ReactNode;
  textStyles?: StyleProp<TextStyle>;
};
