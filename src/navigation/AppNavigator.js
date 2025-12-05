import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import FAQScreen from '../screens/FAQScreen';
import HowToTrainScreen from '../screens/HowToTrainScreen';
import OptionsScreen from '../screens/OptionsScreen';
import SeeingMethodsScreen from '../screens/SeeingMethodsScreen';

import StartRemoteSessionScreen from '../screens/StartRemoteSessionScreen';
import SessionBriefingScreen from '../screens/SessionBriefingScreen';
import TargetLoadingScreen from '../screens/TargetLoadingScreen';
import RemoteViewingScreen from '../screens/RemoteViewingScreen';
import RevealTargetScreen from '../screens/RevealTargetScreen';
import AccuracyRatingScreen from '../screens/AccuracyRatingScreen';
import SessionResultScreen from '../screens/SessionResultScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="HowToTrain" component={HowToTrainScreen} />
      <Stack.Screen name="Options" component={OptionsScreen} />
      <Stack.Screen name="SeeingMethods" component={SeeingMethodsScreen} />
      <Stack.Screen name="StartRemoteViewing" component={StartRemoteSessionScreen} />
      <Stack.Screen name="SessionBriefing" component={SessionBriefingScreen} />
      <Stack.Screen name="TargetLoading" component={TargetLoadingScreen} />
      <Stack.Screen name="RemoteViewing" component={RemoteViewingScreen} />
      <Stack.Screen name="RevealTarget" component={RevealTargetScreen} />
      <Stack.Screen name="AccuracyRating" component={AccuracyRatingScreen} />
      <Stack.Screen name="SessionResult" component={SessionResultScreen} />
    </Stack.Navigator>
  );
}
