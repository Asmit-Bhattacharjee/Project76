import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MeteorScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
        <Stack.Screen name="StarMap" component={StarMap} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

