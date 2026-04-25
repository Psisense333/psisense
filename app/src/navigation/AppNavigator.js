import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* CORE SCREENS */
import WelcomeScreen from "../../screens/WelcomeScreen";
import SignupScreen from "../../screens/SignupScreen";
import MainMenuScreen from "../../screens/MainMenuScreen";

/* SESSION FLOW */
import SessionBriefingScreen from "../../screens/SessionBriefingScreen";
import TargetDetailScreen from "../../screens/TargetDetailScreen";
import RevealTargetScreen from "../../screens/RevealTargetScreen";
import MirrorResultScreen from "../../screens/MirrorResultScreen";

/* DATA + PROFILE */
import HistoryScreen from "../../screens/HistoryScreen";
import HeatmapScreen from "../../screens/HeatmapScreen";
import ProfileScreen from "../../screens/ProfileScreen";

/* MENU SCREENS */
import TargetListScreen from "../../screens/TargetListScreen";
import FAQScreen from "../../screens/FAQScreen";
import HowToTrainScreen from "../../screens/HowToTrainScreen";
import OptionsScreen from "../../screens/OptionsScreen";
import SeeingMethodsScreen from "../../screens/SeeingMethodsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: { backgroundColor: "#0a0a0a" }
      }}
    >
      {/* ENTRY */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />

      {/* SESSION */}
      <Stack.Screen name="SessionBriefing" component={SessionBriefingScreen} />
      <Stack.Screen name="TargetList" component={TargetListScreen} />
      <Stack.Screen name="TargetDetail" component={TargetDetailScreen} />
      <Stack.Screen name="RevealTarget" component={RevealTargetScreen} />
      <Stack.Screen name="MirrorResult" component={MirrorResultScreen} />

      {/* INFO */}
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="HowToTrain" component={HowToTrainScreen} />
      <Stack.Screen name="SeeingMethods" component={SeeingMethodsScreen} />
      <Stack.Screen name="Options" component={OptionsScreen} />

      {/* DATA */}
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Heatmap" component={HeatmapScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}