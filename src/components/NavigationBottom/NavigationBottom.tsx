import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Page from '../../templates/Page';

const Tab = createBottomTabNavigator(
  
);


const NavigationBottom = props => {
    return (
        <Tab.Navigator tabBarOptions={{
          activeTintColor: '#000',
        }}>
          <Tab.Screen name="About" component={Page}  options={{
            tabBarLabel: 'About me',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            title: 'Profile',
          }}/>
          <Tab.Screen name="Notes" component={Page}  options={{
            tabBarLabel: 'Notes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lightbulb" color={color} size={size} />
            ),
            title: 'Profile',
          }}/>
          <Tab.Screen name="Twitters" component={Page} options={{
            tabBarLabel: 'Twitters',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="twitter" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Articles" component={Page} options={{
            tabBarLabel: 'Articles',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={size} />
            ),
          }}/>
          </Tab.Navigator>
      );
};

export default NavigationBottom;