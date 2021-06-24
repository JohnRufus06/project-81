import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
impot {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNavigator from "./navigation/DrawerNavigator";
import Ionicons from 'react-native';

import Feed from "./screens/Feed" 
import CreateStory from "./screens/CreateStory";

const Tab = createBottomTabNavigator(); 

export default function App() { 
  return ( 
  <NavigationContainer> 
    <tab.Navigator >
      <DrawerNavigator></DrawerNavigator>
    </tab.Navigator>
     
        </NavigationContainer> 
        ); 
      }