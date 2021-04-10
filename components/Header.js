import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {
    PieChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";


const Header = props => {
    const screenWidth = Dimensions.get("window").width;
    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];
    return (
        <View style={styles.container}>

            <LinearGradient
                style={styles.gradient}
                colors={['#337DF1', '#00AEEE']}
            >




                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 25, paddingTop: 40 }}>
                    <Icon
                        name='menu'
                        size={35}
                        style={{ paddingLeft: '5%' }}
                        color='#FFF' />
                    <Image
                        style={{ height: 45, width: 45 }}
                        source={require('../assets/profile.png')}
                    />

                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 40, margin: '5%' }}>
                    <Text style={{ paddingTop: 20, paddingLeft: 25, fontFamily: 'Kanit', fontSize: 18 }}>แผนของคุณ</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <PieChart
                            data={data}
                            width={screenWidth}
                            height={220}
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#fb8c00",
                                backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                  borderRadius: 16
                                },
                                propsForDots: {
                                  r: "6",
                                  strokeWidth: "2",
                                  stroke: "#ffa726"
                                }
                              }}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[10, 50]}
                            absolute
                        />
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {

        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        overflow: 'hidden',


    },
    gradient: {
        width: '100%',
        height: 350,
    },


});
export default Header;