import React from 'react';
import { TouchableOpacity } from 'react-native';

import { CustomIcon } from '../CustomIcon';
import { GRAY_LIGHT_COLOR } from '../colors';
import { PasswordTogglerProps } from './types';
import { HITSLOP_ICON_BUTTON } from '../constants';
import { EYE_ICON, EYE_SLASH_ICON } from '../icons';

export const PasswordToggler = ({ visible, onToggle }: PasswordTogglerProps) => (
  <TouchableOpacity
    testID={'passwordToggler'}
    onPress={onToggle}
    activeOpacity={0.8}
    hitSlop={HITSLOP_ICON_BUTTON}
  >
    <CustomIcon
      size={20}
      testID={'customIcon'}
      color={GRAY_LIGHT_COLOR}
      name={visible ? EYE_SLASH_ICON : EYE_ICON}
    />
  </TouchableOpacity>
)
