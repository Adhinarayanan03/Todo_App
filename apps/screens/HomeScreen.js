import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Arrow from 'react-native-vector-icons/AntDesign';
import Pencil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  DEFAULT_BUTTON_HEIGHT,
  MEDIUM_PADDING_SIZE,
  REGULAR_PADDING_SIZE,
  SMALL_PADDING_SIZE,
} from './groovcomponent/layout';
import {useNavigation} from '@react-navigation/native';
import CustomAppBar from '../components/Appbar';
import RectangleBox from '../Rectanglebox';
import {P1, P3, View} from '../../groovcomponent';
import {PURPLE_TODO_COLOR, WHITE_COLOR} from '../../groovcomponent/colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    console.log('Button Pressed!');
  };

  const handleAddTaskPress = () => {
    navigation.navigate('AddTask');
  };

  return (
    <View flex={1}>
      <CustomAppBar
        title="Todo App"
        backgroundColor={PURPLE_TODO_COLOR}
        height={100}
      />

      <View
        style={styles.arrow}
        hPadding={MEDIUM_PADDING_SIZE}
        vPadding={REGULAR_PADDING_SIZE}>
        <Arrow name="arrowleft" size={30} color={WHITE_COLOR} />
      </View>

      <View hPadding={REGULAR_PADDING_SIZE} vPadding={REGULAR_PADDING_SIZE}>
        <RectangleBox>
          <P1>Todo Title</P1>
          <P3>Details</P3>

          <View
            vPadding={SMALL_PADDING_SIZE}
            hPadding={DEFAULT_BUTTON_HEIGHT}
            style={styles.iconContainer}>
            <Pencil name="pencil" size={40} color={PURPLE_TODO_COLOR} />
          </View>

          <View
            vPadding={MEDIUM_PADDING_SIZE}
            hPadding={MEDIUM_PADDING_SIZE}
            style={styles.iconContainer}>
            <Icon name="delete" size={25} color={PURPLE_TODO_COLOR} />
          </View>
        </RectangleBox>
      </View>

      <View style={styles.circle}>
        <TouchableOpacity onPress={handleAddTaskPress}>
          <Icon name="plus" size={30} color={WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 16,
    alignSelf: 'center',
    width: '100%',
  },
  arrow: {
    position: 'absolute',
    marginTop: 10,
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  circle: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#9395D3',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
});

export default HomeScreen;
