// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EditTask from './apps/pages/Edittask';
import HomeScreen from './apps/pages/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './apps/store';
import TaskScreen from './apps/pages/Taskscreen';
import { addTask } from './apps/actions/taskActions';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    {/* <Stack.Screen name="AddTask" component={addTask} />
    <Stack.Screen name="EditTask" component={EditTask} /> */}
    <Stack.Screen name="TaskScreen" component={TaskScreen} />


  </Stack.Navigator>
  </NavigationContainer>
  </Provider>

  );
};

export default App;
