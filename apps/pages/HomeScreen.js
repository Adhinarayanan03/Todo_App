import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Pencil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import View from '../atoms/View';
import RectangleBox from '../molecules/Rectanglebox';
import P1 from '../atoms/P1';
import P3 from '../atoms/P3';
import {useDispatch, useSelector} from 'react-redux';

import {deleteTask} from '../actions/taskActions';
import {WHITE_COLOR} from '../theme/colors';
import Header from '../molecules/Header';
import { SMALL } from '../theme/layout';
import newimage from '/Users/adhi/Task/App/apps/assets/images/newimage.png';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  // const handleAddTask = () => {
  //   dispatch(addTask('New Task', 'Task Details'));
  // };

  const handleDeleteTask = task => {
    dispatch(deleteTask(task?.id));
  };

  const navigation = useNavigation();

  const navigateToAddTask = () => {
    navigation.navigate('TaskScreen', {task: null});
  };

  const navigateToEditScreen = task => {
    navigation.navigate('TaskScreen', {task});
  };

  console.log(tasks);

  return (
    <View flex={1}>
      <Header title="To-Do List"  height={100} backgroundColor={'#9395D3'} />
      <View
        flex={1}
backgroundColor={WHITE_COLOR}
       >
        <View hCenter vCenter>
          {tasks.tasks.length === 0 && (
          <Image source={newimage}  style={{height:'70%',width:'100%'}}/>
        )}
</View>
        {tasks?.tasks?.map((task, index) => (
          <RectangleBox borderWidth={1} key={index}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                // borderWidth: 2,
              }}>
              
              <P1>{task.title || 'Data not available'}</P1>
              <P3>{task.detail || 'Data not available'}</P3>
            </View>

            <View hCenter vCenter flexrow>
              <View hPadding={SMALL} style={{bottom: 2}}>
                <Pencil
                  name="pencil"
                  size={35}
                  onPress={() => navigateToEditScreen(task)}
                />
              </View>

              <View>
                <Icon
                  name="delete"
                  size={24}
                  onPress={() => handleDeleteTask(task)}
                />
              </View>
            </View>
          </RectangleBox>
        ))}
      </View>

      <View style={styles.circle}>
        <TouchableOpacity onPress={navigateToAddTask}>
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
  text: {
    textOverflow: 'ellipsis',
  },
});

export default HomeScreen;
