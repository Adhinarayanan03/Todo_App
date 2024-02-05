import React from 'react';
import { StyleSheet } from 'react-native';

import { P3, View } from '../index';
import { BadgeProps } from './types';
import { REGULAR_PADDING_SIZE } from '../layout';
import { WHITE_COLOR, PRIMARY_COLOR } from '../colors';


export const Badge: React.FC<BadgeProps> = ({
  badgeStyle,
  messageCount,
  size = REGULAR_PADDING_SIZE,
}) => {
  return (
    <View
      hCenter
      vCenter
      style={[
        styles.badge,
        !!size && {
          height: size,
          width: size,
          borderRadius: size / 2
        },
        badgeStyle
      ]}
    >
      <P3 textStyles={styles.text} color={WHITE_COLOR}>
        {messageCount <= 99 ? messageCount : '99+'}
      </P3>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: REGULAR_PADDING_SIZE,
    height: REGULAR_PADDING_SIZE,
    borderRadius: REGULAR_PADDING_SIZE / 2,
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    fontSize: 12
  }
});
