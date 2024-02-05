import React from 'react';
import {
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps
} from 'react-native';

export type KeyboardAvoidingViewProps = {
  keyboardOffset?: number;
  children: React.ReactNode;
  props?: RNKeyboardAvoidingViewProps;
}
