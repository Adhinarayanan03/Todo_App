import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Pencil from 'react-native-vector-icons/EvilIcons';
import P1 from '../atoms/P1';
import P2 from '../atoms/P2';
import P3 from '../atoms/P3';
import View from '../atoms/View';
import Card from '../molecules/Card';
import {
  NONE,
  SMALL,
  LARGE,
  MEDIUM,
  DELUXE,
  ALIGN_CENTER,
  JUSTIFY_CENTER,
  POSITION_ABSOLUTE,
} from '../theme/style';
import {WHITE_COLOR, PRIMARY_COLOR} from '../theme/colors';
import Header from '../molecules/Header';
import {deleteTask} from '../actions/taskActions';

const HomeScreen = () => {
  const headerHeight = 100;
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

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

  return (
    <View flex={1}>
      <Header
        title="To-Do List"
        height={headerHeight}
        backgroundColor={PRIMARY_COLOR}
      />
      <View
        flex={1}
        backgroundColor={WHITE_COLOR}
        paddingHorizontal={SMALL}
        paddingVertical={SMALL}>
        {tasks.tasks.length === 0 && (
          <View flexRow flex={1} horizontalCenter verticalCenter>
            <P2>ADD YOUR TODO LIST HERE !</P2>
          </View>
        )}

        {tasks?.tasks?.map((task, index) => (
          <Card borderWidth={1} key={index}>
            <View flex={1}>
              <P1>{task.title || 'Data not available'}</P1>
              <P3>{task.detail || 'Data not available'}</P3>
            </View>

            <View horizontalCenter verticalCenter flexRow>
              <View paddingHorizontal={SMALL} style={{bottom: 2}}>
                <Pencil
                  name="pencil"
                  size={LARGE}
                  onPress={() => navigateToEditScreen(task)}
                />
              </View>

              <View>
                <Icon
                  name="delete"
                  size={MEDIUM}
                  onPress={() => handleDeleteTask(task)}
                />
              </View>
            </View>
          </Card>
        ))}
      </View>

      <View
        style={[ALIGN_CENTER, JUSTIFY_CENTER, POSITION_ABSOLUTE]}
        right={NONE}
        margin={LARGE}
        bottom={SMALL}
        width={DELUXE}
        height={DELUXE}
        borderRadius={LARGE}
        backgroundColor={PRIMARY_COLOR}>
        <TouchableOpacity onPress={navigateToAddTask}>
          <Icon name="plus" size={LARGE} color={WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
