import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DynamicScreen from '../screens/DynamicScreen';
import HomeScreen from '../screens/HomeScreen';
import MissionScreen from '../screens/MissionScreen';
import PlaningScreen from '../screens/PlaningScreen';
import SubMission from '../screens/SubMission';
const mapping_icon = {
    "ค่าใช้จ่าย": require('../assets/Home/Card/cost.png'),
    "การลงทุน": require('../assets/Home/Card/invest.png'),
    "เงินออม": require('../assets/Home/Card/piggy.png'),
    "เป้าหมาย": require('../assets/Home/Card/goal.png'),
}
const data = {
    total: 15000,
    dataList: [
        {
            name: "ค่าใช้จ่าย",
            present: 8000,
            value: 9000,
            color: "rgba(245, 77, 86, 1)",
            color2: "rgba(245, 77, 86, 0.5)",
            percent: 9000 * 100 / 15000,
        },
        {
            name: "การลงทุน",
            present: 3000,
            value: 3000,
            color: "rgba(51, 125, 241, 1)",
            color2: "rgba(51, 125, 241, 0.5)",
            percent: 3000 * 100 / 15000,
        },
        {
            name: "เงินออม",
            present: 1500,
            value: 1500,
            color: "rgba(48, 197, 139, 1)",
            color2: "rgba(48, 197, 139, 0.5)",
            percent: 1500 * 100 / 15000,
        },
        {
            name: "เป้าหมาย",
            present: 1500,
            value: 1500,
            color: "rgba(246, 213, 92, 1)",
            color2: "rgba(246, 213, 92, 0.5)",
            percent: 1500 * 100 / 15000,
        }
    ]
};
const StackNav = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { headerShown: false },
        params: { data: data ,mapping_icon:mapping_icon }

    },
    Planing: {
        screen: PlaningScreen,
        navigationOptions: { headerShown: false },
        params: { data: data ,mapping_icon:mapping_icon }
    },
    Mission: {
        screen: MissionScreen,
        navigationOptions: { headerShown: false },
        params: { data: data ,mapping_icon:mapping_icon }
    },
    Cost: {
        screen: DynamicScreen,
        navigationOptions: { headerShown: false },
        params: { data: data ,mapping_icon:mapping_icon }
    },
    SubMission: {
        screen: SubMission,
        navigationOptions: { headerShown: false },
        params: { data: data ,mapping_icon:mapping_icon }
    }
});





export default createAppContainer(StackNav);