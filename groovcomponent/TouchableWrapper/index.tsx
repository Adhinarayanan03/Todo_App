import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { HITSLOP_BUTTON } from '../constants';

export const TouchableWrapper: React.FC<PropsWithChildren<TouchableOpacityProps>> = ({ children, ...props }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    hitSlop={HITSLOP_BUTTON}
    {...props}
  >
    {children}
  </TouchableOpacity>
)
