import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';


const Navigator = createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{headerShown: false}
    },
    Result:{
        screen:ResultScreen,
        navigationOptions:{headerShown: false}
    },
});

export default createAppContainer(Navigator);