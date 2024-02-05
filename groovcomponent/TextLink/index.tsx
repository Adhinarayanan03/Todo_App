import React from 'react';
import { TouchableOpacity } from 'react-native';

import { P1 } from '../P1';
import { TextLinkProps } from './types';
import { PRIMARY_COLOR } from '../colors';

export const TextLink: React.FC<React.PropsWithChildren<TextLinkProps>> = ({ children, onPress, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <P1
        color={PRIMARY_COLOR}
        {...props}
      >
        {children}
      </P1>
    </TouchableOpacity>
  )
}
