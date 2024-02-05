import React from 'react';
import { StyleSheet, Switch as RNSwitch, View } from 'react-native';


import { P2 } from '../P2';
import { Width } from '../Width';
import { SwitchProps } from './types';
import { IS_ANDROID } from '../constants';
import { GRAY_LIGHT_COLOR, PRIMARY_COLOR, WHITE_COLOR } from '../colors';

export const Switch = ({
  label,
  value,
  onToggle
}: SwitchProps) => {

  const setToggleValue = (value: boolean) => {
    onToggle?.(value);
  }

  return (
    <View testID={'switch-container'} style={styles.container}>
      <RNSwitch
        value={value}
        testID={'switch'}
        onValueChange={setToggleValue}
        thumbColor={IS_ANDROID ? (
          value ? PRIMARY_COLOR : GRAY_LIGHT_COLOR
        ) : WHITE_COLOR}
        trackColor={{ false: GRAY_LIGHT_COLOR, true: PRIMARY_COLOR }}
      />

      <Width />

      <P2>
        {label}
      </P2>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
