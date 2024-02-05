import React from 'react';
import { Pressable, StyleSheet, TextInput as InputField, View } from 'react-native';

import {
  SMALL_PADDING_SIZE,
  MEDIUM_PADDING_SIZE,
  HALF_SMALL_PADDING_SIZE,
  DEFAULT_TEXT_INPUT_HEIGHT,
} from '../layout';
import {
  DARK_COLOR,
  WHITE_COLOR,
  DANGER_COLOR,
  PRIMARY_COLOR,
  GRAY_DARK_COLOR,
  GRAY_LIGHT_COLOR,
  GRAY_XX_LIGHT_COLOR,
} from '../colors';
import { P1 } from '../P1';
import { P2 } from '../P2';
import { Height } from '../Height';
import { REGULAR_FONT } from '../fonts';
import { CIRCLE_CROSS_ICON } from '../icons';
import { CustomIcon } from '../CustomIcon';
import { TextInputComponentProps } from './types';

export const TextInput = ({
  label,
  onBlur,
  onFocus,
  inputRef,
  disabled,
  errorText,
  borderColor,
  centerLabel,
  isUnderlined,
  textInputProps,
  textInputStyles,
  hideBorder = false,
  renderRightComponent,
  height = DEFAULT_TEXT_INPUT_HEIGHT,
}: TextInputComponentProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const textInputRef = inputRef || React.createRef<InputField>();

  const _onFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const _onBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const _clearInput = () => {
    if (textInputProps?.onChangeText) {
      textInputProps?.onChangeText('');
    }
    textInputRef.current?.focus();
  };

  return (
    <>
      {!!label && (
        <P1
          center={centerLabel}
          color={GRAY_DARK_COLOR}>
          {label}
        </P1>
      )}
      <Height size={HALF_SMALL_PADDING_SIZE} />
      <View
        testID={'inputContainer'}
        style={[
          !!height && { height },
          styles.inputContainer,
          !!borderColor && { borderColor },
          isFocused && !hideBorder && styles.focusedContainer,
          !!errorText && styles.errorContainer,
          disabled && styles.disabledContainer,
          isUnderlined && styles.underlinedContainer,
        ]}>
        <InputField
          ref={inputRef}
          onBlur={_onBlur}
          onFocus={_onFocus}
          testID={'textInput'}
          editable={!disabled}
          style={[styles.textInput, textInputStyles]}
          {...textInputProps}
        />

        {!!textInputProps?.value && !renderRightComponent && !!errorText && (
          <Pressable testID={'clearButton'} onPress={_clearInput}>
            <CustomIcon
              size={24}
              name={CIRCLE_CROSS_ICON}
              color={GRAY_LIGHT_COLOR}
            />
          </Pressable>
        )}

        {renderRightComponent && renderRightComponent}
      </View>

      <Height size={HALF_SMALL_PADDING_SIZE} />

      {!!errorText && (
        <P2 color={DANGER_COLOR}>
          {errorText}
        </P2>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: GRAY_LIGHT_COLOR,
    backgroundColor: WHITE_COLOR,
    borderRadius: SMALL_PADDING_SIZE,
    paddingHorizontal: MEDIUM_PADDING_SIZE,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: DARK_COLOR,
    includeFontPadding: false,
    fontFamily: REGULAR_FONT,
    paddingVertical: MEDIUM_PADDING_SIZE,
    borderRadius: SMALL_PADDING_SIZE,
  },
  focusedContainer: {
    borderColor: PRIMARY_COLOR,
  },
  errorContainer: {
    borderColor: DANGER_COLOR,
  },
  disabledContainer: {
    borderColor: GRAY_XX_LIGHT_COLOR,
    backgroundColor: GRAY_XX_LIGHT_COLOR,
  },
  underlinedContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
  }
});
