import React from 'react';
import { TextInputProps, TextInput, StyleProp, TextStyle } from 'react-native';

export type TextInputComponentProps = {
  height?: number;
  disabled?: boolean;
  onBlur?: () => void;
  errorText?: string;
  hideBorder?: boolean;
  label?: string | null;
  centerLabel?: boolean;
  borderColor?: string;
  onFocus?: () => void;
  isUnderlined?: boolean;
  textInputProps?: TextInputProps;
  inputRef?: React.RefObject<TextInput>;
  textInputStyles?: StyleProp<TextStyle>;
  renderRightComponent?: React.ReactNode;
};

export type TextInputRefType = TextInput;

export type TextInputRefObjectType = React.RefObject<TextInput>;
