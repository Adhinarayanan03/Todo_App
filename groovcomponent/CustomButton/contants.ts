import { ButtonVariant } from './types';

import {
  WHITE_COLOR,
  PRIMARY_COLOR,
  GRAY_DARK_COLOR,
  GRAY_MEDIUM_COLOR,
  GRAY_XX_LIGHT_COLOR,
} from '../colors';

export const buttonVariants: ButtonVariant = {
  primary: {
    textColor: WHITE_COLOR,
    loaderColor: WHITE_COLOR,
    backgroundColor: PRIMARY_COLOR,
  },
  secondary: {
    textColor: WHITE_COLOR,
    loaderColor: WHITE_COLOR,
    backgroundColor: GRAY_DARK_COLOR,
  },
  disabled: {
    textColor: GRAY_MEDIUM_COLOR,
    loaderColor: GRAY_DARK_COLOR,
    backgroundColor: GRAY_XX_LIGHT_COLOR,
  },
};
