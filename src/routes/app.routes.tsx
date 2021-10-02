import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import Dashboard from '../Screens/Dashboard';
import Register from '../Screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.orange,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60
        }
      }}
    >
      <Screen
        name='Listagem'
        component={Dashboard}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ size, color }) => <MaterialIcons name='format-list-bulleted' size={size} color={color} />
        }}
      />
      <Screen
        name='Register'
        component={Register}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ size, color }) => <MaterialIcons name='attach-money' size={size} color={color} />
        }}
      />
      <Screen
        name='Resumo'
        component={Register}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ size, color }) => <MaterialIcons name='pie-chart' size={size} color={color} />
        }}
      />
    </Navigator>
  );
};
export default AppRoutes;
