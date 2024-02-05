import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEDIUM_FONT, REGULAR_FONT } from '../../groovcomponent/fonts';
import { H1, H2 } from '../../groovcomponent';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WHITE_COLOR } from '../../groovcomponent/colors';

const CustomAppBar = ({ title, backgroundColor, height }) => {
  return (
    <View style={ [styles.appBar, { backgroundColor, height }]} >
      <H2 color={WHITE_COLOR}>{title}</H2>

    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // color: Colors.,
    right :60,
    top:5

  },
});

export default CustomAppBar;
