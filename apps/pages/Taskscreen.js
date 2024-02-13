import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../actions/taskActions';
import View from '../atoms/View';
import TextComponent from '../molecules/Textcomponent';
import CustomButton from '../molecules/Buttoncomponent';

import Header from '../molecules/Header';
import {LARGE, SMALL} from '../theme/layout';
import {WHITE_COLOR} from '../theme/colors';

const TaskScreen = ({route}) => {
  // console.log(route, "KJHKJHHJ")

  const {task} = route?.params;

  // console.log(task, "KJHKJHHJ")

  const [titleValue, setTitleValue] = useState(task?.title || '');
  const [detailValue, setDetailValue] = useState(task?.detail || '');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddTask = () => {
    const timestamp = new Date().getTime();
    dispatch(addTask(timestamp, titleValue, detailValue));
  };

  const handleEditTask = () => {
    const timestamp = new Date().getTime();
    console.log(task.id, 'id');
    console.log(task.titleValue, 'titleValue');
    console.log(task.detailValue, 'detailValue');

    dispatch(editTask(task.id, titleValue, detailValue));
  };

  const backToHome = () => {
    navigation.navigate('HomeScreen');
  };

  const handleButtonPress = () => {
    if (task) {
      handleEditTask();
    } else {
      handleAddTask();
    }
    backToHome();
  };

  console.log(detailValue);
  return (
    <View backgroundColor={WHITE_COLOR} flex={1}>
      <Header
        title={task ? 'Edit Task' : 'Add Task'}
        backgroundColor="#9395D3"
        height={100}
      />

      <View style={styles.arrow} hPadding={LARGE} vPadding={LARGE}>
        <Arrow
          name="arrowleft"
          size={30}
          color={WHITE_COLOR}
          onPress={backToHome}
        />
      </View>

      <View hPadding={LARGE} vPadding={LARGE}>
        <View>
          <TextComponent
            title="Title"
            value={titleValue}
            onChangeText={text => setTitleValue(text)}
          />
          <TextComponent
            title="Detail"
            value={detailValue}
            onChangeText={text => setDetailValue(text)}
          />
        </View>
      </View>

      <View vPadding={SMALL} hPadding={LARGE}>
        <CustomButton
          title={task ? 'Update' : 'Add'}
          onPress={handleButtonPress}
          disabled={titleValue === '' || detailValue === ''}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 16,
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
  },
  arrow: {
    position: 'absolute',
    marginTop: 10,
  },
});

export default TaskScreen;
