import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native'
import { VictoryPie } from 'victory-native';
import Icon from 'react-native-vector-icons/Entypo';
import Dot from 'react-native-vector-icons/Octicons';
import InvestCard from './InvestCard';
import numberWithCommas from '../../utils/Functional';
const InvestConent = (props) => {
    const data = props.data
    const [isExpand, setIsExpand] = useState(false);
    const screenHight = Dimensions.get('window').height / 2.9;
    const categoryColor = ['#30C58B', '#337DF1', '#F6D55C']
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
                <Text style={[styles.textBold, { fontSize: 20 }]}>พอร์ตปัจจุบัน</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ borderWidth: 0, width: '60%', }}>
                        <View style={{ borderWidth: 0, left: -120, top: -35, width: '65%', height: '22%' }}>
                            <VictoryPie
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 100 }
                                }}
                                height={screenHight}

                                colorScale={categoryColor}
                                labelPosition="centroid"
                                labelRadius={() => 25}
                                data={dataList}
                                x="name"
                                y="percent"
                                labels={({ datum }) => datum.percent + "%"}
                                style={{ labels: { fill: "white", fontSize: 16 } }}
                            />
                        </View>
                    </View>
                    <View style={{ borderWidth: 0, width: '40%' }}>
                        <View style={{ flexDirection: "row", alignItems: 'center', borderWidth: 0 }}>
                            <Text style={[styles.text, { marginRight: 4 }]}>อัตราผลตอบแทน</Text>
                            <Icon
                                name="help-with-circle"
                                size={10}
                                color="rgba(51, 125, 241, 0.3)" />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >

                                <Text style={[{ fontFamily: 'Kanit-SemiBold', fontSize: 30 }]}>4.95 </Text>
                                <Text style={[styles.text, { fontSize: 20 }]}>%/ปี</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.text, { fontSize: 12, marginRight: 4 }]}>ความเสี่ยงปานกลาง</Text>
                            <Icon
                                name="help-with-circle"
                                size={10}
                                color="rgba(51, 125, 241, 0.3)" />
                        </View>
                        <View style={{ padding: 15, paddingBottom: 0 }}>
                            {
                                dataList.map((val, key) => {
                                    return (
                                        <View style={{ flexDirection: 'row' }} key={key}>
                                            <Dot
                                                name='primitive-dot'
                                                size={25}

                                                color={categoryColor[key]} />
                                            <Text style={[styles.text, { marginLeft: 5 }]}>{val.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ height: '12%', marginVertical: '2%', width: Dimensions.get('window').width * 0.9, borderWidth: 0 }}>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    style={{ borderWidth: 0, width: '100%' }}
                >
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            dataList.map((val, key) => {
                                return <InvestCard data={val} key={key} />
                            })
                        }

                    </View>
                </ScrollView>
            </View>

            <View style={{ position: isExpand ? 'absolute' : 'relative', marginVertical: '0%', height: isExpand ? Dimensions.get('window').height : '100%', backgroundColor: 'white', width: '100%', padding: 20, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>

                <View style={{ width: '100%', borderWidth: 0, height: Dimensions.get('window').height }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={changeLayout} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={[styles.textBold, { fontSize: 25, paddingHorizontal: 15 }]}>รายการ</Text>
                        <Icon
                            name={isExpand ? "chevron-thin-down" : "chevron-thin-up"}
                            size={30}
                            style={{marginRight:10}}
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
