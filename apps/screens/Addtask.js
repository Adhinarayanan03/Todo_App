import React from 'react';
import {StyleSheet} from 'react-native';
import { View } from './groovcomponent';
import TextComponent from './apps/Textcomponent';
import CustomAppBar from './apps/Appbar';
import CustomButton from './apps/Buttoncomponent';
import { MEDIUM_PADDING_SIZE, REGULAR_PADDING_SIZE } from './groovcomponent/layout';

const AddTask = () => {
  const handleButtonPress = () => {
    console.log('Button Pressed!');
  };

  return (
    <View>
        
      <CustomAppBar title="Add Task" backgroundColor="#9395D3" height={118} />
      
      <View hPadding={MEDIUM_PADDING_SIZE}
      vPadding={MEDIUM_PADDING_SIZE}>
      <View vPadding={REGULAR_PADDING_SIZE}>
        <TextComponent title="Title" />
        <TextComponent title="Detail" />
      </View>
      
      <CustomButton
        title="Add"
        onPress={handleButtonPress}
        style={styles.buttonStyle}
      />
      
      </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
//   container:{
// padding:30
//   },
  buttonStyle: {
    borderRadius: 16,
    alignSelf: 'center',
    width: '100%',
  },
  text:{
marginBottom:30
  },
});

export default AddTask;
