import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type HeaderTextProps = {
  bold?: boolean;
  color?: string;
  center?: boolean;
  medium?: boolean;
  children: React.ReactNode;
  uppercase?: boolean;
  textStyles?: StyleProp<TextStyle>;
};
