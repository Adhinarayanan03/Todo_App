// Everything related to layout should be exported and used from this specific file.

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;

export const SMALL_PADDING_SIZE = 8;
export const LARGE_PADDING_SIZE = 40;
export const MEDIUM_PADDING_SIZE = 16;
export const REGULAR_PADDING_SIZE = 24;
export const XX_LARGE_PADDING_SIZE = 80;
export const HALF_SMALL_PADDING_SIZE = 4;
export const HALF_LARGE_PADDING_SIZE = 20;
export const XXX_LARGE_PADDING_SIZE = 120;
export const HALF_REGULAR_PADDING_SIZE = 12;

export const DEFAULT_BUTTON_HEIGHT = 60;
export const DEFAULT_TEXT_INPUT_HEIGHT = 60;
