import React from 'react';
import { TouchableHighlight, StyleSheet, ActivityIndicator, View } from 'react-native';

import { P1 } from '../P1';
import { CustomButtonProps } from './types';
import { buttonVariants } from './contants';
import { HITSLOP_BUTTON } from '../constants';
import { DEFAULT_BUTTON_HEIGHT, REGULAR_PADDING_SIZE } from '../layout';

export const CustomButton = ({
  onPress,
  children,
  textColor,
  requesting,
  backgroundColor,
  variant = 'primary',
}: CustomButtonProps) => {

  const isDisabled = React.useMemo(() => variant === 'disabled' || requesting, [variant, requesting]);

  return (
    <View testID={'buttonContainer'} style={styles.superContainer}>
      <TouchableHighlight
        testID={'button'}
        activeOpacity={0.8}
        hitSlop={HITSLOP_BUTTON}
        onPress={!isDisabled ? onPress : undefined}
        underlayColor={isDisabled ? buttonVariants[variant].backgroundColor : buttonVariants[variant].backgroundColor + 'cc'}
        style={[
          styles.container,
          { backgroundColor: backgroundColor || buttonVariants[variant].backgroundColor },
        ]}>
        {requesting ? (
          <ActivityIndicator testID={'buttonLoader'} size={'small'} color={buttonVariants[variant].loaderColor} />
        ) : (
          <P1
            color={textColor || buttonVariants[variant].textColor}
          >
            {children}
          </P1>
        )}
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  superContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: DEFAULT_BUTTON_HEIGHT,
  },
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: DEFAULT_BUTTON_HEIGHT,
    paddingHorizontal: REGULAR_PADDING_SIZE,
  },
});
