import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Dot from 'react-native-vector-icons/Octicons';
import {
    PieChart,
} from "react-native-chart-kit";
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import { Dimensions } from "react-native";

const Header = props => {
    
    const screenWidth = Dimensions.get("window").width;
    const screenHight = Dimensions.get('window').height / 5;
    const data = {
        total: 15000,
        dataList: [
            {
                name: "ค่าใช้จ่าย",
                present: 8000,
                value: 9000,
                color: "#F54D56",
            },
            {
                name: "การลงทุน",
                present: 3000,
                value: 3000,
                color: "#337DF1",
            },
            {
                name: "เงินออม",
                present: 800,
                value: 1500,
                color: "#30C58B",
            },
            {
                name: "เป้าหมาย",
                present: 800,
                value: 1500,
                color: "#F6D55C",
            }
        ]
    };
    const progressBarData = []

    const legendShow = data.dataList.map((val, key) => {
        progressBarData.push({ color: val.color, value: val.present / data.total })
        return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }} key={key}>
            <Dot
                name='primitive-dot'
                size={25}

                color={val.color} />
            <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 25 }}>{val.name}</Text>
            <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 25 }}>{val.value / data.total * 100} %</Text>
        </View>
    })

    return (
        <View style={styles.container}>

            <LinearGradient
                style={styles.gradient}
                colors={['#337DF1', '#00AEEE']}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 25, paddingTop: 30 }}>

                    <Icon
                        name='menu'
                        size={35}
                        style={{ paddingLeft: '5%' }}
                        color='#FFF'
                        onPress={() => {props.navigation.openDrawer()}} />


                    <Image
                        style={{ height: 45, width: 45 }}
                        source={require('../assets/profile.png')}
                    />

                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 40, marginLeft: '5%', marginRight: '5%',marginTop:'2%', marginBottom: '3%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingTop: '4%', paddingLeft: 25, paddingRight: 25, alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 18 }}>แผนของคุณ</Text>
                        <Icon
                            name='settings'
                            size={18}

                            color={'#C4C4C4'}
                            onPress={() => props.navigation.navigate('Planing')}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',height:'54%' }}>
                        <View style={{ width: '55%', height: 'auto' }}>
                            <PieChart
                                data={data.dataList}
                                width={screenWidth}
                                height={screenHight}
                                chartConfig={{
                                    backgroundGradientFrom: "#1E2923",
                                    backgroundGradientFromOpacity: 0,
                                    backgroundGradientTo: "#08130D",
                                    backgroundGradientToOpacity: 0.5,
                                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                    strokeWidth: 2, // optional, default 3
                                    barPercentage: 0.5,
                                    useShadowColorFromDataset: false // optional
                                }}
                                accessor={"value"}
                                backgroundColor={"transparent"}

                                hasLegend={false}
                                absolute
                            />
                        </View>
                        <View style={{ width: '45%' }}>
                            <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 21 }}>
                                สัดส่วน
                            </Text>
                            <View style={{ flexDirection: 'column' }}>
                                {
                                    legendShow
                                }
                            </View>
                        </View>


                    </View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 22 }}>ความคืบหน้าของแผน</Text>
                        <Text style={{ fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 18 }}>74%</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 2, justifyContent: 'center' }}>
                        <ProgressBar
                            arrayOfProgressObjects={progressBarData}
                            backgroundBarStyle={{
                                backgroundColor: '#EFF1F5',
                                borderRadius: 8.5,
                                height: Dimensions.get('window').height * 2 / 100,
                                width: Dimensions.get('window').width / 1.35
                            }}
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
        height: Dimensions.get('window').height * 0.48,
    },


});
export default Header;