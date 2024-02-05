import React from 'react';
import {View} from './groovcomponent';
import {StyleSheet} from 'react-native';
import TextComponent from './apps/Textcomponent';
import CustomAppBar from './apps/Appbar';
import CustomButton from './apps/Buttoncomponent';
import {LARGE_PADDING_SIZE, MEDIUM_PADDING_SIZE} from './groovcomponent/layout';


const EditTask = () => {

  const handleButtonPress = () => {
    console.log('Button Pressed!');
  };

  return (
    <View>
      <CustomAppBar title="Edit Task" backgroundColor="#9395D3" height={118} />

      <View hPadding={MEDIUM_PADDING_SIZE} vPadding={MEDIUM_PADDING_SIZE}>
        <View >
          <TextComponent title="Title" />
          <TextComponent title="Detail" />
        </View>
      </View>
      <View style={styles.buttonStyle} vPadding={MEDIUM_PADDING_SIZE} hPadding={LARGE_PADDING_SIZE}>
        <CustomButton
          title="Update"
          onPress={handleButtonPress}
          style={styles.buttonStyle}
        />

        <CustomButton
          title="Cancel"
          onPress={handleButtonPress}
          style={styles.buttonStyle}
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
  },
 
});

export default EditTask;
