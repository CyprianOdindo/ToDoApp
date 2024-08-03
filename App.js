import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Adjust the path as necessary
import GoalScreen from './screens/Goalscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My To-Do List' }}
        />
        <Stack.Screen
        name='Goals'
        component={GoalScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
