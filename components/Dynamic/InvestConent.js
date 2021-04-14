import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import InvestCard from './InvestCard';
import numberWithCommas from '../../utils/Functional';
import InvestPieChart from './InvestPieChart';
import InvestGraphChart from './InvestGraphChart';
const InvestConent = (props) => {
    const data = props.data
    const [isExpand, setIsExpand] = useState(false);
    

    const dataTransaction = [
        {
            name: "กองทุนรวม",
            date: "8 กุมภาพันธ์ 2021",
            amount: 1500,
        },
        {
            name: "หุ้น AIS",
            date: "8 กุมภาพันธ์ 2021",
            amount: 1000,
        },
        {
            name: "ตราสารหนี้",
            date: "8 กุมภาพันธ์ 2021",
            amount: 1500,
        },
        {
            name: "หุ้น OR",
            date: "8 มกราคม 2021",
            amount: 1000,
        },
    ]
    const dataList = [
        {
            name: "กองทุนรวม",
            amount: 4575,
            percent: 50,
            profit: 5.61
        },
        {
            name: "หุ้น",
            amount: 12645,
            percent: 30,
            profit: -1.61,
        },
        {
            name: "ตราสารหนี้",
            amount: 3140,
            percent: 20,
            profit: -0.75,
        }
    ]
    let averageProfit = 0
    const showCard = []
    dataList.map((val,key)=>{
        averageProfit += val.profit
        return showCard.push( <View style={{ marginHorizontal: 3 }}>
            <InvestCard data={val} key={key} />
        </View>)
    })
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpand(!isExpand);
    }
    return (
        <View style={{ width: '100%', marginTop: '2%', alignItems: 'center' }}>
            <View style={{ padding: 20, paddingHorizontal: 25, width: '90%', backgroundColor: 'white', borderRadius: 40 }}>

                <ScrollView
                    horizontal
                    snapToInterval={Dimensions.get('window').width * 0.79}
                    decelerationRate="fast"
                >
                    <InvestPieChart dataList={dataList} />
                    <InvestGraphChart data={data} dataList={dataList} />
                </ScrollView>


            </View>
            <View style={{ height: '12%', marginVertical: '2%', width: Dimensions.get('window').width * 0.9, borderWidth: 0 }}>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    style={{ borderWidth: 0, width: '100%' }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 0 }}>
                        <View style={{ marginHorizontal: 3 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 3, width: Dimensions.get('window').height * 0.15, height: Dimensions.get('window').height * 0.15, paddingVertical: 10, borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'Kanit' }}>ผลตอบแทน</Text>
                                <Text style={{ fontFamily: 'Kanit' }}>เฉลี่ยน ณ ปัจจุบัน</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 0 }}>
                                    <Icon2
                                        name={averageProfit > 0 ? "trending-up-sharp" : "trending-down-sharp"}
                                        size={30}
                                        color={averageProfit > 0 ? '#30C58B' : '#F54D56'}
                                        style={{ marginRight: 5 }}
                                    />
                                    <View style={{ backgroundColor: averageProfit > 0 ? '#30C58B' : '#F54D56', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20 }}>
                                        <Text style={{ fontFamily: 'Kanit', color: 'white', fontSize: 18 }}>{averageProfit}%</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        {
                            showCard

                        }

                    </View>
                </ScrollView>
            </View>

            <View style={{ position: isExpand ? 'absolute' : 'relative', marginVertical: '0%', height: isExpand ? Dimensions.get('window').height : '100%', backgroundColor: 'white', width: '100%', padding: 20, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>

                <View style={{ width: '100%', borderWidth: 0, height: Dimensions.get('window').height }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={changeLayout} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[styles.textBold, { fontSize: 25, paddingHorizontal: 15 }]}>รายการ</Text>
                        <Icon
                            name={isExpand ? "chevron-thin-down" : "chevron-thin-up"}
                            size={30}
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, flexDirection: 'column' }}
                        style={{ borderWidth: 0, width: '100%', borderWidth: 0 }}>
                        {
                            dataTransaction.map((val, key) => {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, borderWidth: 0, height: '8%' }} key={key}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ marginRight: 9, borderRadius: 30 / 2, width: 30, height: 30, backgroundColor: '#337DF1' }}>

                                            </View>
                                            <View>
                                                <Text style={[styles.text]}>{val.name}</Text>
                                                <Text style={[styles.text, { color: '#898A8D' }]}>{val.date}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[styles.text, { fontSize: 16 }]}>{numberWithCommas(val.amount)}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </ScrollView>
                </View>

            </View>
        </View >
    )
}

export default InvestConent

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    },
    textBold: {
        fontFamily: 'Kanit-SemiBold'
    }
})
