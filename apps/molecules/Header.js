import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import H2 from '../atoms/H2';

const Header = ({ title, backgroundColor, height,...restProps }) => {
  return (
    <View style={ [styles.appBar, { backgroundColor, height }]} {...restProps}>
      <H2  style={styles.title}>{title}</H2>

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
    fontSize:30,
    color: '#FFFFFF', 
    fontFamily: 'Jost-Bold' 
  },
});

export default Header;
