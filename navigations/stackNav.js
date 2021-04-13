import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DynamicScreen from '../screens/DynamicScreen';
import HomeScreen from '../screens/HomeScreen';
import MissionScreen from '../screens/MissionScreen';
import PlaningScreen from '../screens/PlaningScreen';

const StackNav = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { headerShown: false }
    },
    Planing: {
        screen: PlaningScreen,
        navigationOptions: { headerShown: false }
    },
    Mission: {
        screen: MissionScreen,
        navigationOptions: { headerShown: false }
    },
    Cost: {
        screen: DynamicScreen,
        navigationOptions: { headerShown: false }
    }
});





export default createAppContainer(StackNav);