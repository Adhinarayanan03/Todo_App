import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/AntDesign';
import {
  addTask, 
  editTask
} from '../actions/taskActions';
import View from '../atoms/View';
import Header from '../molecules/Header';
import CustomButton from '../molecules/Button';
import TextComponent from '../molecules/Textcomponent';
import {PRIMARY_COLOR, WHITE_COLOR} from '../theme/colors';
import { 
  LARGE, MEDIUM, 
  POSITION_ABSOLUTE, 
  SMALL 
} from '../theme/style';


const TaskScreen = ({route}) => {
  const headerHeight = 100;
  const {task} = route?.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [titleValue, setTitleValue] = useState(task?.title || '');
  const [detailValue, setDetailValue] = useState(task?.detail || '');

  const handleAddTask = () => {
    const timestamp = new Date().getTime();
    dispatch(addTask(timestamp, titleValue, detailValue));
  };

  const handleEditTask = () => {
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
        backgroundColor={PRIMARY_COLOR}
        height={headerHeight}
      />

      <View style={POSITION_ABSOLUTE} margin={SMALL} paddingVertical={LARGE} paddingHorizontal={MEDIUM}>
        <Arrow
          name="arrowleft"
          size={LARGE}
          color={WHITE_COLOR}
          onPress={backToHome}
        />
      </View>

      <View paddingHorizontal={LARGE} paddingVertical={LARGE}>
        <View>
          <TextComponent
            title="Title"
            value={titleValue}
            onChangeText={text => setTitleValue(text)}
            fontSize={MEDIUM}
          />
          <TextComponent
            title="Detail"
            value={detailValue}
            onChangeText={text => setDetailValue(text)}
            fontSize={MEDIUM}

          />
        </View>
      </View>

      <View paddingVertical={SMALL} paddingHorizontal={LARGE} >
        <CustomButton
          title={task ? 'Update' : 'Add'}
          onPress={handleButtonPress}
          disabled={titleValue === '' || detailValue === ''}
        />
      </View>
    </View>
  );
};


export default TaskScreen;
