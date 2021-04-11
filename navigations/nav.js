import React from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
const CardPlan = (props) => {
    return (
        <View>
            <Text>Card</Text>
        </View>
    )
};

const CustomDrawerNavigation = (props) => {

    return (

        <View style={{ marginTop: 20 }}>
            <SafeAreaView style={styles.container}>
                <View style={[styles.cycleNav, { left: -60, top: -50, }]}>
                    <LinearGradient
                        style={{ width: '100%', height: '100%' }}
                        colors={['rgba(82,100,249,1)', 'rgba(0,219,222,1)']}
                    />
                </View>
                <View style={[styles.cycleNav, { left: -50, top: -60, }]}>
                    <LinearGradient
                        style={{ width: '100%', height: '100%' }}
                        colors={['rgba(198,48,248,0)', 'rgba(47,86,248,1)']}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>

                    <Image
                        style={{ height: 70, width: 70, justifyContent: 'center' }}
                        source={require('../assets/profile.png')}
                    />

                </View>
                <Text style={{ fontFamily: 'Kanit', marginTop: '15%', color: '#2B47FC' }}>
                    ยอดเงินคงเหลือทุกบัญชี
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#2B47FC' }}>
                        THB
                    </Text>
                    <Text style={{ fontFamily: 'Kanit', fontSize: 30, color: '#2B47FC' }}>
                        48,000.00
                    </Text>
                </View>

                <View
                    style={styles.lineBrake}
                />
                <DrawerItems {...props} />
            </SafeAreaView>



        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',

    },
    lineBrake: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    cycleNav: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        overflow: 'hidden',
        position: 'absolute',

    }

});


const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { headerShown: false }
    },
    Result: {
        screen: ResultScreen,
        navigationOptions: { headerShown: false }
    },
},
    {
        contentComponent: CustomDrawerNavigation,
        drawerWidth: (Dimensions.get('window').width / 3) * 2,
        drawerBackgroundColor: 'transparent'
    }
);





export default createAppContainer(DrawerNavigator);
