import {
  StyleSheet,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
} from 'react-native';

import { IS_IOS } from '../constants';

import { KeyboardAvoidingViewProps } from './types';

export const KeyboardAvoidingView = ({
  props,
  children,
  keyboardOffset,
}: KeyboardAvoidingViewProps) => (
  <RNKeyboardAvoidingView
    style={styles.container}
    testID={'keyboardAvoidingView'}
    keyboardVerticalOffset={keyboardOffset}
    behavior={IS_IOS ? 'padding' : undefined}
    {...props}
  >
    {children}
  </RNKeyboardAvoidingView>
)

export default KeyboardAvoidingView

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
