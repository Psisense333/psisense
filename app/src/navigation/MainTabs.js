import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import HowToScreen from '../../screens/HowToScreen';
import FAQScreen from '../../screens/FAQScreen';
import OptionsScreen from '../../screens/OptionsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#acf92c',
        tabBarInactiveTintColor: '#888',

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'HowTo') iconName = 'book';
          else if (route.name === 'FAQ') iconName = 'help-circle';
          else if (route.name === 'Options') iconName = 'settings';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HowTo" component={HowToScreen} />
      <Tab.Screen name="FAQ" component={FAQScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
}
