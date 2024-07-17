import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import About from '../screens/About';
import Birthday from '../screens/Birthday';
import HeightAndWeight from '../screens/HeightAndWeight';
import Routine from '../screens/Routine';
import Thankyou from '../screens/Thankyou';
import GetStarted from '../screens/GetStarted';
import ExerciseOverview from '../screens/ExerciseOverview';
import Workout from '../screens/Workout';
import Rest from '../screens/Rest';
import NutritionOnboarding1 from '../screens/NutritionOnboarding1';
import NutritionOnboarding2 from '../screens/NutritionOnboarding2';
import NutritionOnboarding3 from '../screens/NutritionOnboarding3';
import CalculateCalories from '../screens/CalculateCalories';
import DisplayTarget from '../screens/DisplayTarget';
import Done from '../screens/Done';
import FoodUpdate from '../screens/FoodUpdate';
import Profile from '../screens/Profile';
import Journey from '../screens/Journey';
import Feed from '../screens/Feed';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="HeightAndWeight" component={HeightAndWeight} />
        <Stack.Screen name="Routine" component={Routine} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="ExerciseOverview" component={ExerciseOverview} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Rest" component={Rest} />
        <Stack.Screen name="NutritionOnboarding1" component={NutritionOnboarding1} />
        <Stack.Screen name="NutritionOnboarding2" component={NutritionOnboarding2} />
        <Stack.Screen name="NutritionOnboarding3" component={NutritionOnboarding3} />
        <Stack.Screen name="CalculateCalories" component={CalculateCalories} />
        <Stack.Screen name="DisplayTarget" component={DisplayTarget} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="FoodUpdate" component={FoodUpdate} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Journey" component={Journey} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
