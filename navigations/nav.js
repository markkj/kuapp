import React from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import MissionScreen from '../screens/MissionScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import PlaningScreen from '../screens/PlaningScreen';
import stackNav from './stackNav';
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
                        colors={['rgba(51,125,241,1)', 'rgba(4,171,239,1)']}
                    />
                </View>
                <View style={[styles.cycleNav, { left: -50, top: -60, }]}>
                    <LinearGradient
                        style={{ width: '100%', height: '100%' }}
                        colors={['rgba(4,171,239,0)', 'rgba(47,86,248,1)']}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>

                    <Image
                        style={{ height: 70, width: 70, justifyContent: 'center' }}
                        source={require('../assets/profile.png')}
                    />

                </View>
                <Text style={{ fontFamily: 'Kanit', marginTop: '8%', color: '#2B47FC' }}>
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
                <View style={styles.scrollViewCard}>
                    <ScrollView>
                        <Card selected={true} />
                        <Card selected={false} />
                        <Card selected={false} />
                    </ScrollView>

                </View>
                <View
                    style={styles.lineBrake}
                />
                <View style={styles.scrollViewCard}>
                    <View style={styles.menuCard}>
                        <View style={styles.wrapper}>
                            <Icon
                                name="md-notifications-outline"
                                size={20}
                                color="#2B47FC"
                            />
                            <Text style={styles.menuText}> การแจ้งเตือน</Text>
                        </View>
                        <Icon3
                            name="navigate-next"
                            size={20}
                            color="#2B47FC"
                        />
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.wrapper}>
                            <Icon2
                                name="edit"
                                size={20}
                                color="#2B47FC"
                            />
                            <Text style={styles.menuText}> ปรับแต่งธีม / ไอคอน</Text>
                        </View>
                        <Icon3
                            name="navigate-next"
                            size={20}
                            color="#2B47FC"
                        />
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.wrapper}>
                            <Icon
                                name="md-language"
                                size={20}
                                color="#2B47FC"
                            />
                            <Text style={styles.menuText}> ภาษา</Text>
                        </View>
                        <Icon3
                            name="navigate-next"
                            size={20}
                            color="#2B47FC"
                        />
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.wrapper}>
                            <Icon2
                                name="help-circle"
                                size={20}
                                color="#2B47FC"
                            />
                            <Text style={styles.menuText}> ช่วยเหลือ</Text>
                        </View>
                        <Icon3
                            name="navigate-next"
                            size={20}
                            color="#2B47FC"
                        />
                    </View>
                </View>
                <View style={styles.scrollViewCard}>
                    <View style={styles.logOut}>
                        <Text style={styles.menuText}>ออกจากระบบ</Text>
                        <Icon
                            name="exit-outline"
                            size={20}
                            color="#2B47FC"
                        />
                    </View>
                </View>

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

    },
    scrollViewCard: {
        flexDirection: 'column',
        height: '30%',
        width: '100%',
        alignItems: 'center',
    },
    menuText: {
        fontFamily: 'Kanit',
        fontSize: 15,
        color: "#2B47FC"
    },
    menuCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 180,
        marginVertical: 10
    },
    wrapper: {
        flexDirection: 'row',

    },
    logOut: {
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#2B47FC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 5,

    }

});


const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: stackNav,
        navigationOptions: { headerShown: false }
    },
    Result: {
        screen: ResultScreen,
        navigationOptions: { headerShown: false }
    },
    Mission: {
        screen: MissionScreen,
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
