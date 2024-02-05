// All constants should be exported and used from this specific file.

import { Platform } from 'react-native';
import { Edge } from 'react-native-safe-area-context';

import { ANDROID_RIPPLE_COLOR } from './colors';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

const EDGE_TOP: Edge = 'top';
const EDGE_RIGHT: Edge = 'right';
const EDGE_LEFT: Edge = 'left';
const EDGE_BOTTOM: Edge = 'bottom';

export const SAFE_AREA_BOTTOM_EDGES = [EDGE_RIGHT, EDGE_LEFT, EDGE_BOTTOM];
export const SAFE_AREA_HEADER_EDGES = [EDGE_TOP, EDGE_RIGHT, EDGE_LEFT];

export const HITSLOP_BUTTON = {
  top: 8,
  left: 16,
  right: 16,
  bottom: 8,
};

export const HITSLOP_OTP_INPUT = {
  top: 16,
  left: 16,
  right: 16,
  bottom: 16,
};

export const ANDROID_BUTTON_RIPPLE_CONFIG = {
  radius: 200,
  foreground: true,
  color: ANDROID_RIPPLE_COLOR,
};

export const HITSLOP_ICON_BUTTON = {
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
};
