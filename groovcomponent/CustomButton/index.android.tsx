import React from 'react';
import { Pressable, StyleSheet, ActivityIndicator, View } from 'react-native';

import { P1 } from '../P1';
import { CustomButtonProps } from './types';
import { buttonVariants } from './contants';
import { DEFAULT_BUTTON_HEIGHT, REGULAR_PADDING_SIZE } from '../layout';
import { ANDROID_BUTTON_RIPPLE_CONFIG, HITSLOP_BUTTON } from '../constants';

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
      <Pressable
        testID={'button'}
        hitSlop={HITSLOP_BUTTON}
        onPress={!isDisabled ? onPress : null}
        android_ripple={variant !== 'disabled' ? ANDROID_BUTTON_RIPPLE_CONFIG : null}
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
      </Pressable>
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
