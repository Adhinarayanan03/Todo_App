import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './apps/store';
import HomeScreen from './apps/pages/HomeScreen';
import TaskScreen from './apps/pages/Taskscreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="TaskScreen" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
