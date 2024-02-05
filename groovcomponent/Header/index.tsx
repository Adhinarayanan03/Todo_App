import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeaderProps } from './types';
import { SAFE_AREA_HEADER_EDGES } from '../constants';
import { PRIMARY_COLOR, WHITE_COLOR } from '../colors';
import { MEDIUM_PADDING_SIZE, SMALL_PADDING_SIZE } from '../layout';
import { CustomIcon, Height, P1, View, Width, TouchableWrapper } from '../index';

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  title,
  content,
  children,
  onPressBack,
  rightIconName,
  onPressRightIcon,
  rightIconSize = 22,
  renderRightComponent,
  contentColor = WHITE_COLOR,
  backgroundColor = PRIMARY_COLOR,
}) => (
  <SafeAreaView
    style={[
      styles.container,
      { backgroundColor }
    ]}
    edges={SAFE_AREA_HEADER_EDGES}
  >
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={backgroundColor}
    />
    <View
      row
      vCenter
      spaceBetween
      vPadding={SMALL_PADDING_SIZE}
      hPadding={MEDIUM_PADDING_SIZE}
    >
      <View flex={1} row vCenter>
        {onPressBack && (
          <>
            <TouchableWrapper onPress={onPressBack}>
              <CustomIcon
                size={18}
                color={contentColor}
                name={'back-arrow'}
              />
            </TouchableWrapper>
            <Width size={SMALL_PADDING_SIZE} />
          </>
        )}

        {content || (
          <View>
            <P1
              color={contentColor}
              textStyles={styles.title}
            >
              {title}
            </P1>
          </View>
        )}

      </View>

      {!!rightIconName && (
        <TouchableWrapper
          onPress={onPressRightIcon}
        >
          <CustomIcon
            size={rightIconSize}
            color={contentColor}
            name={rightIconName}
          />
        </TouchableWrapper>
      )}

      {!rightIconName && renderRightComponent && renderRightComponent}

    </View>

    {children && children}
    
    <Height size={SMALL_PADDING_SIZE} />
  </SafeAreaView >
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 22,
  }
});
